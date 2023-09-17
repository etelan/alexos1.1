const styleMiddle = {
  position: 'fixed',
  bottom: '0',
  left: '50%',           // push it to the middle of the viewport
  width: '400px',
  marginLeft: '-200px',  // pull it back by half its width to truly center
  marginBottom: '20px',
}

const bookOrder = [
    "Adventure Zone #1: Here There Be Gerblins :]",
    "How_to_Invent_Everything__A_Survival_Guide_for_the_Stranded_Time_Traveler",
    "Mistakes_Were_Made",
    "Adventure Zone #2: Murder on the Rockport Limited",
    "Adventure Zone #3: Petals to the Metal",
    "Adventure Zone #4: The Crystal Kingdom",
    "Adventure Zone #5: The Eleventh Hour",
    "Paybacks_a_Witch :D",
];

export { default as Paybacks_a_Witch } from './paybacks.jpg';
export { default as How_to_Invent_Everything__A_Survival_Guide_for_the_Stranded_Time_Traveler} from './rebuildWorld.jpg';
export { default as Mistakes_Were_Made } from './mistakes.jpg';


// Adventure Series
export { default as Adventure_Zone_1_Here_There_Be_Gerblins } from './adventure1.jpg';
export { default as Adventure_Zone_2_Murder_on_the_Rockport_Limited } from './adventure2.jpg';
export { default as Adventure_Zone_3_Petals_to_the_Metal } from './adventure3.jpg';
export { default as Adventure_Zone_4_The_Crystal_Kingdom } from './adventure4.jpg';
export { default as Adventure_Zone_5_The_Eleventh_Hour } from './adventure5.jpg';


export { bookOrder, styleMiddle };
  