const express = require("express");
const app=express();
const path=require("path");

app.use(express.static('public'));
app.use(express.json());

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

//mogoose connections


const mongoose=require("mongoose");
const Student=require('./models/student_model');
const Teacher=require('./models/teacher_model');
const Contact=require('./models/contact_model');
mongoose.connect('mongodb://127.0.0.1:27017/dbms', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("MONGOOSE CONNECTED");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log(err);
})



//accessing ejs pages
app.get('/home',(req,res)=>{
    res.render('home.ejs');

})
app.get('/about',(req,res)=>{
    res.render('about.ejs');
    
})
app.get('/student',(req,res)=>{
    res.render('student.ejs');
    
})
app.get('/teacher',(req,res)=>{
    res.render('teacher.ejs');
    
})
app.get('/admin',(req,res)=>{
    res.render('admin.ejs');
    
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs');
})



app.get('/admin_upload',(req,res)=>{
    res.render('admin_upload.ejs');
})

app.get('/allstudents', async (req, res) => {
    const searchQuery = req.query.search;
    let students;
    if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i'); 
        students = await Student.find({
            $or:[
                {s_branch: regex },
                {s_id:regex}
            ] 
        });
    } else {
        students = await Student.find({});
    }
    res.render('allstudents', { students });
});


app.post('/student_login', async (req, res) => {
    const { s_id, s_pass } = req.body;
    const student = await Student.findOne({ s_id: s_id });
    if (student) {
        let _10thmarks=student.s_10thmarks*(2);
        let intermarks=student.s_intermarks*(20/1000);
        let cgpa=student.s_cgpa*(4);
        var acheivements=0,project=0;
        if(student.s_achievements!='')
            acheivements=10;
        if(student.s_projects!='')
            projects=10;
        let total=_10thmarks+intermarks+cgpa+acheivements+projects;
        
        res.render('student_login', { student , total });
    } else {
        res.send('Student ID not found');
    }
});

app.post('/teacher_login',async (req,res)=>{
    const {t_id, t_branch}=req.body;
    const teacher=await Teacher.findOne({t_id:t_id})
    if(teacher){
    const students= await Student.find({s_branch:t_branch})
    res.render('teacher_login',{ students,teacher});
    }else{
        res.send('Teacher ID not found');
    }
});

app.post('/suggestions',async (req,res)=>{
    const newdata=new Contact(req.body);
    console.log(newdata);
    await newdata.save();
    res.send('Thank You For Your Suggestion');
})

app.get('/suggestions',async (req,res)=>{
    const contacts=await Contact.find();
    
    res.render('suggestions.ejs', {contacts});
})



app.post('/allstudents', async (req, res) => {
    const newdata = new Student(req.body);
    await newdata.save();
    console.log(newdata);
    res.redirect('/allstudents');
});

app.get('/edit/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.render('edit_student', { student });
    } catch (e) {
        res.status(500).send('Server Error');
    }
});


app.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.redirect('/allstudents');
});

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect('/allstudents');
});

const leetcodeProblems = [
    { id: 1, title: 'Two Sum', statement: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', url: 'https://leetcode.com/problems/two-sum/' },
    { id: 2, title: 'Add Two Numbers', statement: 'You are given two non-empty linked lists representing two non-negative integers.', url: 'https://leetcode.com/problems/add-two-numbers/' },
    { id: 3, title: 'Longest Substring Without Repeating Characters', statement: 'Given a string, find the length of the longest substring without repeating characters.', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    { id: 4, title: 'Median of Two Sorted Arrays', statement: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    { id: 5, title: 'Longest Palindromic Substring', statement: 'Given a string s, return the longest palindromic substring in s.', url: 'https://leetcode.com/problems/longest-palindromic-substring/' },
    { id: 6, title: 'Zigzag Conversion', statement: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows.', url: 'https://leetcode.com/problems/zigzag-conversion/' },
    { id: 7, title: 'Reverse Integer', statement: 'Given a signed 32-bit integer x, return x with its digits reversed.', url: 'https://leetcode.com/problems/reverse-integer/' },
    { id: 8, title: 'String to Integer (atoi)', statement: 'Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.', url: 'https://leetcode.com/problems/string-to-integer-atoi/' },
    { id: 9, title: 'Container With Most Water', statement: 'Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).', url: 'https://leetcode.com/problems/container-with-most-water/' },
    { id: 10, title: '3Sum', statement: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k.', url: 'https://leetcode.com/problems/3sum/' }
];
const projectIdeas = [
    {
        id: 1,
        title: 'Personal Budget Tracker',
        statement: 'Create a web application that helps users track their personal finances. The application should allow users to add, edit, and delete expenses and incomes. Users should be able to categorize their transactions (e.g., food, transportation, utilities) and visualize their spending through charts and graphs. The application should support user authentication, so each user can manage their own data securely.'
    },
    {
        id: 2,
        title: 'Movie Recommendation System',
        statement: 'Develop a movie recommendation system using machine learning. The system should analyze user preferences and behavior to suggest movies that they are likely to enjoy. Users should be able to rate movies, and the system should use these ratings to improve its recommendations. The project can be implemented as a web application or a standalone software.'
    },
    {
        id: 3,
        title: 'E-commerce Website',
        statement: 'Build a fully functional e-commerce website. The website should allow users to browse products, add them to a shopping cart, and proceed to checkout. Implement user authentication and authorization, so users can create accounts and log in to see their order history. Add an admin panel where administrators can manage products, categories, and orders.'
    },
    {
        id: 4,
        title: 'Chat Application',
        statement: 'Create a real-time chat application using WebSockets. Users should be able to create accounts, log in, and join chat rooms. Each chat room should support multiple users sending and receiving messages in real-time. Implement features such as private messaging, message history, and user status (online/offline).'
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        statement: 'Develop a weather dashboard that displays current weather information and forecasts for multiple cities. Use a weather API to fetch data and display it in a user-friendly manner. Implement features such as search for cities, save favorite locations, and show weather alerts. The dashboard should be responsive and work well on both desktop and mobile devices.'
    }
];
app.get('/topper',(req,res)=>{
    const shuffledProblems = leetcodeProblems.sort(() => 0.5 - Math.random());
    const selectedProblems = shuffledProblems.slice(0, 5);
    const selectedProjects = projectIdeas;
    res.render('topper', { problems: selectedProblems,projects: selectedProjects });
})

const Quizes=[
    { id:1, title:'DBMS' , url:'https://quizizz.com/join/search/engineering%20dbms?languages=English'},
    { id:2, title:'DSA'  ,url:'https://quizizz.com/join/search/engineering%20dsa?languages=English'},
    { id:3, title:'FSD' ,  url:'https://quizizz.com/join/search/engineering%20web%20development?languages=English'},
    { id:4,title:'C Programming',url:'https://quizizz.com/join/search/engineering%20c%20programming?languages=English'},
    { id:5,title:'JAVA',url:'https://quizizz.com/join/search/engineering%20java%20programming?languages=English'},
    { id:6,title:'PYTHON',url:'https://quizizz.com/join/search/engineering%20python?languages=English'}
]
app.get('/average',(req,res)=>{
    const shuffledProblems = leetcodeProblems.sort(() => 0.5 - Math.random());
    const selectedProblems = shuffledProblems.slice(0, 5);
    const quizes=Quizes.sort(()=>0.5-Math.random());
    const squiz=quizes.slice(0,4);
    res.render('average.ejs',{problems: selectedProblems, Quizes:squiz });
})

const youtube=[
    { id:1, title:'DBMS' , url:'https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y'},
    { id:2, title:'DSA'  ,url:'https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi'},
    { id:3, title:'FSD' ,  url:'https://www.youtube.com/watch?v=kJEsTjH5mVg&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'},
    { id:4,title:'C Programming',url:'https://www.youtube.com/watch?v=EjavYOFoJJ0&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S'},
    { id:5,title:'JAVA',url:'https://www.youtube.com/watch?v=bm0OyhwFDuY&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5'},
    { id:6,title:'PYTHON',url:'https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3'}
]
app.get('/slow',(req,res)=>{
    const quizes=Quizes.sort(()=>0.5-Math.random());
    const squiz=quizes.slice(0,4);
    const y=youtube.sort(()=>0.5-Math.random());
    const yout=y.slice(0,4);
    res.render('slow.ejs',{Quizes:squiz , Youtube:yout});
})


app.listen(3002,()=>{
    console.log("opnening in 3002");
})