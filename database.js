const mongoose=require("mongoose");
const Student=require('./models/student_model');
const Teacher=require('./models/teacher_model');
const Contact=require('./models/contact_model');
mongoose.connect('mongodb://127.0.0.1:27017/dbms',{useNewUrlParser:true},{useUnifiedTopology:true})
.then(()=>{
    console.log("MONGOOSE CONNECTED");
})
.catch(err=>{
    console.log("CONNECTION ERROR");
    console.log("err");
})
const allsuggestions=[
    {
        name:'Goutham',
        email:'goutham@gmail.com',
        message:'keep some lecture videos in website'
    }
]
const allteachers=[
    {
        t_id:'it01',
        t_branch:'it',
        t_name:'sudha'
    },
    {
        t_id:'it02',
        t_branch:'it',
        t_name:'Radha'
    },
    {
        t_id:'it03',
        t_branch:'it',
        t_name:'ramesh'
    },
    {
        t_id:'it04',
        t_branch:'it',
        t_name:'suresh'
    },
    {
        t_id:'cse01',
        t_branch:'cse',
        t_name:'sudha'
    },
    {
        t_id:'cse02',
        t_branch:'cse',
        t_name:'Radha'
    },
    {
        t_id:'cse03',
        t_branch:'cse',
        t_name:'ramesh'
    },
    {
        t_id:'cse04',
        t_branch:'cse',
        t_name:'suresh'
    },
    {
        t_id:'ece01',
        t_branch:'ece',
        t_name:'sudha'
    },
    {
        t_id:'ece02',
        t_branch:'ece',
        t_name:'Radha'
    },
    {
        t_id:'ece03',
        t_branch:'ece',
        t_name:'ramesh'
    },
    {
        t_id:'ece04',
        t_branch:'ece',
        t_name:'suresh'
    },
    {
        t_id:'eee01',
        t_branch:'eee',
        t_name:'sudha'
    },
    {
        t_id:'eee02',
        t_branch:'eee',
        t_name:'Radha'
    },
    {
        t_id:'eee03',
        t_branch:'eee',
        t_name:'ramesh'
    },
    {
        t_id:'eee04',
        t_branch:'eee',
        t_name:'suresh'
    }


]
// const s=new Student({
//     s_id:'1602-22-737-001',
//     s_name:'Ajay',
//     s_branch:'it',
//     s_10thmarks:10.0,
//     s_intermarks:990,
//     s_cgpa:9.7,
//     s_achievements:"Won in coding contest",
//     s_projects:"waste management project",
//     s_interests:"playing , reading books"
// })
// s.save().then(p=>{
//     console.log(p);
// })
// .catch(e =>{
//     console.log(e);
// })

const allstudents = [
    {
        s_id:'1602-22-737-001',
        s_name:'Ajay',
        s_branch:'it',
        s_10thmarks:10.0,
        s_intermarks:990,
        s_cgpa:9.7,
        s_achievements:"Won in coding contest",
        s_projects:"waste management project",
        s_interests:"playing , reading books"
    },
    
    {
    s_id:'1602-22-737-002',
    s_name:'vijay',
    s_branch:'it',
    s_10thmarks:9.8,
    s_intermarks:980,
    s_cgpa:9.6,
    s_achievements:"Won in coding contest",
    s_projects:"railway management project",
    s_interests:"playing cricket, reading books "
    },
    {
    s_id:'1602-22-737-003',
    s_name:'uday',
    s_branch:'it',
    s_10thmarks:9.9,
    s_intermarks:970,
    s_cgpa:9.5,
    s_achievements:"Won in coding contest",
    s_projects:"metro management project",
    s_interests:"playing cricket, reading books"
    },
    {
    s_id:'1602-22-737-004',
    s_name:'ram',
    s_branch:'it',
    s_10thmarks:10.0,
    s_intermarks:980,
    s_cgpa:9.8,
    s_achievements:"Won in coding contest",
    s_projects:"college management project",
    s_interests:"playing , reading books"
    },
    {
    s_id:'1602-22-737-005',
    s_name:'sita',
    s_branch:'it',
    s_10thmarks:8.0,
    s_intermarks:900,
    s_cgpa:8.7,
    s_achievements:"paricipated in coding contest",
    s_projects:"ludo game project",
    s_interests:"dancing , reading books"
    },
    {
    s_id:'1602-22-737-006',
    s_name:'rahul',
    s_branch:'it',
    s_10thmarks:7.0,
    s_intermarks:870,
    s_cgpa:7.7,
    s_achievements:"",
    s_projects:"library management",
    s_interests:"playing games, riding"
    },
    {
    s_id:'1602-22-737-007',
    s_name:'rohit',
    s_branch:'it',
    s_10thmarks:7.0,
    s_intermarks:800,
    s_cgpa:7.0,
    s_achievements:"",
    s_projects:"",
    s_interests:"playing games"
    },
    {
    s_id:'1602-22-737-008',
    s_name:'geeta',
    s_branch:'it',
    s_10thmarks:6.5,
    s_intermarks:750,
    s_cgpa:7.0,
    s_achievements:"",
    s_projects:"",
    s_interests:"cooking , reading books"
    },
    {
    s_id:'1602-22-737-009',
    s_name:'nagaraj',
    s_branch:'it',
    s_10thmarks:6.0,
    s_intermarks:650,
    s_cgpa:6.7,
    s_achievements:"",
    s_projects:"",
    s_interests:"playing carroms, reading books"
    },
    
    
    
        {
        s_id:'1602-22-737-010',
        s_name:'jyo reddy',
        s_branch:'it',
        s_10thmarks:6.0,
        s_intermarks:690,
        s_cgpa:6.0,
        s_achievements:"",
        s_projects:"",
        s_interests:"travelling, reading books"
        },
        {
        s_id:'1602-22-737-011',
        s_name:'vurvik',
        s_branch:'cse',
        s_10thmarks:9.8,
        s_intermarks:980,
        s_cgpa:9.6,
        s_achievements:"Won in coding contest",
        s_projects:"railway management project",
        s_interests:"playing cricket, reading books "
        },
        {
        s_id:'1602-22-737-012',
        s_name:'nirmal',
        s_branch:'cse',
        s_10thmarks:9.9,
        s_intermarks:970,
        s_cgpa:9.5,
        s_achievements:"Won in coding contest",
        s_projects:"metro management project",
        s_interests:"playing cricket, reading books"
        },
        {
        s_id:'1602-22-737-013',
        s_name:'ramesh',
        s_branch:'cse',
        s_10thmarks:10.0,
        s_intermarks:980,
        s_cgpa:9.8,
        s_achievements:"Won in coding contest",
        s_projects:"college management project",
        s_interests:"playing , reading books"
        },
        {
        s_id:'1602-22-737-014',
        s_name:'akshith',
        s_branch:'cse',
        s_10thmarks:8.0,
        s_intermarks:900,
        s_cgpa:8.7,
        s_achievements:"paricipated in coding contest",
        s_projects:"ludo game project",
        s_interests:"dancing , reading books"
        },
        {
        s_id:'1602-22-737-015',
        s_name:'sohan',
        s_branch:'cse',
        s_10thmarks:7.0,
        s_intermarks:870,
        s_cgpa:7.7,
        s_achievements:"",
        s_projects:"",
        s_interests:"playing games, riding"
        },
        {
        s_id:'1602-22-737-016',
        s_name:'srk',
        s_branch:'cse',
        s_10thmarks:7.0,
        s_intermarks:800,
        s_cgpa:7.0,
        s_achievements:"",
        s_projects:"",
        s_interests:"playing games"
        },
        {
        s_id:'1602-22-737-017',
        s_name:'goutham',
        s_branch:'cse',
        s_10thmarks:6.5,
        s_intermarks:750,
        s_cgpa:7.0,
        s_achievements:"",
        s_projects:"",
        s_interests:"cooking , reading books"
        },
        {
        s_id:'1602-22-737-018',
        s_name:'koushik',
        s_branch:'cse',
        s_10thmarks:6.0,
        s_intermarks:650,
        s_cgpa:6.7,
        s_achievements:"",
        s_projects:"",
        s_interests:"playing carroms, reading books"
        },
        {
        s_id:'1602-22-737-019',
        s_name:'jevan reddy',
        s_branch:'cse',
        s_10thmarks:6.0,
        s_intermarks:690,
        s_cgpa:6.0,
        s_achievements:"",
        s_projects:"",
        s_interests:"travelling, reading books"
        },
        {
            s_id:'1602-22-737-020',
            s_name:'yash',
            s_branch:'cse',
            s_10thmarks:9.8,
            s_intermarks:980,
            s_cgpa:9.6,
            s_achievements:"Won in coding contest",
            s_projects:"railway management project",
            s_interests:"playing cricket, reading books "
            },
            {
            s_id:'1602-22-737-021',
            s_name:'uday',
            s_branch:'ece',
            s_10thmarks:9.9,
            s_intermarks:970,
            s_cgpa:9.5,
            s_achievements:"Won in coding contest",
            s_projects:"metro management project",
            s_interests:"playing cricket, reading books"
            },
            {
            s_id:'1602-22-737-022',
            s_name:'kalam',
            s_branch:'ece',
            s_10thmarks:10.0,
            s_intermarks:980,
            s_cgpa:9.8,
            s_achievements:"Won in coding contest",
            s_projects:"college management project",
            s_interests:"playing , reading books"
            },
            {
            s_id:'1602-22-737-023',
            s_name:'sitamansh',
            s_branch:'ece',
            s_10thmarks:8.0,
            s_intermarks:900,
            s_cgpa:8.7,
            s_achievements:"paricipated in coding contest",
            s_projects:"ludo game project",
            s_interests:"dancing , reading books"
            },
            {
            s_id:'1602-22-737-024',
            s_name:'rahul sharma',
            s_branch:'ece',
            s_10thmarks:7.0,
            s_intermarks:870,
            s_cgpa:7.7,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing games, riding"
            },
            {
            s_id:'1602-22-737-025',
            s_name:'rohit sharma',
            s_branch:'ece',
            s_10thmarks:7.0,
            s_intermarks:800,
            s_cgpa:7.0,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing games"
            },
            {
            s_id:'1602-22-737-026',
            s_name:'geeta kumar',
            s_branch:'ece',
            s_10thmarks:6.5,
            s_intermarks:750,
            s_cgpa:7.0,
            s_achievements:"",
            s_projects:"",
            s_interests:"cooking , reading books"
            },
            {
            s_id:'1602-22-737-027',
            s_name:'rakesh',
            s_branch:'ece',
            s_10thmarks:6.0,
            s_intermarks:650,
            s_cgpa:6.7,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing carroms, reading books"
            },
            {
            s_id:'1602-22-737-028',
            s_name:'rahul reddy',
            s_branch:'ece',
            s_10thmarks:6.0,
            s_intermarks:690,
            s_cgpa:6.0,
            s_achievements:"",
            s_projects:"",
            s_interests:"travelling, reading books"
            },
            {
            s_id:'1602-22-737-029',
            s_name:'jagan ',
            s_branch:'ece',
            s_10thmarks:9.8,
            s_intermarks:980,
            s_cgpa:9.6,
            s_achievements:"Won in coding contest",
            s_projects:"railway management project",
            s_interests:"playing cricket, reading books "
            },
            {
            s_id:'1602-22-737-030',
            s_name:'virat',
            s_branch:'ece',
            s_10thmarks:9.9,
            s_intermarks:970,
            s_cgpa:9.5,
            s_achievements:"Won in coding contest",
            s_projects:"metro management project",
            s_interests:"playing cricket, reading books"
            },
            {
            s_id:'1602-22-737-031',
            s_name:'ram',
            s_branch:'eee',
            s_10thmarks:10.0,
            s_intermarks:980,
            s_cgpa:9.8,
            s_achievements:"participated in electronics all india quiz",
            s_projects:"Electro Magentic induction",
            s_interests:"playing guitar, reading books"
            },
            {
            s_id:'1602-22-737-032',
            s_name:'sitaram',
            s_branch:'eee',
            s_10thmarks:8.0,
            s_intermarks:900,
            s_cgpa:8.7,
            s_achievements:"participated in electronics all india quiz",
            s_projects:"control systems",
            s_interests:"dancing, reading books"
            },
            {
            s_id:'1602-22-737-033',
            s_name:'sanjay',
            s_branch:'eee',
            s_10thmarks:7.0,
            s_intermarks:870,
            s_cgpa:7.7,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing games, riding"
            },
            {
            s_id:'1602-22-737-034',
            s_name:'varun',
            s_branch:'eee',
            s_10thmarks:7.0,
            s_intermarks:800,
            s_cgpa:7.0,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing cricket,reading"
            },
            {
            s_id:'1602-22-737-035',
            s_name:'arun',
            s_branch:'eee',
            s_10thmarks:6.5,
            s_intermarks:750,
            s_cgpa:7.0,
            s_achievements:"",
            s_projects:"",
            s_interests:"singing, reading books"
            },
            {
            s_id:'1602-22-737-036',
            s_name:'nagaraj',
            s_branch:'eee',
            s_10thmarks:6.0,
            s_intermarks:650,
            s_cgpa:6.7,
            s_achievements:"",
            s_projects:"",
            s_interests:"playing carroms, reading books"
            },
            {
                s_id:'1602-22-737-037',
                s_name:'chandu',
                s_branch:'eee',
                s_10thmarks:9.8,
                s_intermarks:980,
                s_cgpa:9.6,
                s_achievements:"participated in electronics all india quiz",
                s_projects:"car control using ",
                s_interests:"playing cricket, reading books "
                },
                {
                s_id:'1602-22-737-038',
                s_name:'rinku',
                s_branch:'eee',
                s_10thmarks:9.9,
                s_intermarks:970,
                s_cgpa:9.5,
                s_achievements:"participated in electronics all india quiz",
                s_projects:"fire fighting robotic vehicle",
                s_interests:"playing cricket, singing"
                },
                {
                s_id:'1602-22-737-039',
                s_name:'surya',
                s_branch:'eee',
                s_10thmarks:10.0,
                s_intermarks:980,
                s_cgpa:9.8,
                s_achievements:"participated in electronics all india quiz",
                s_projects:"fire fighting robotic vehicle",
                s_interests:"dancing , reading books"
                },
                {
                    s_id:'1602-22-737-040',
                    s_name:'virat kohli',
                    s_branch:'eee',
                    s_10thmarks:10.0,
                    s_intermarks:980,
                    s_cgpa:9.8,
                    s_achievements:"participated in electronics all india quiz",
                    s_projects:"fire fighting robotic vehicle",
                    s_interests:"dancing , reading books"
                    }
]

Student.insertMany(allstudents)
Teacher.insertMany(allteachers)
Contact.insertMany(allsuggestions)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})