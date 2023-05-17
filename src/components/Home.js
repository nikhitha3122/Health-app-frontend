import React from 'react'
import wall from '../images/wall.jpeg'
import diab from '../images/diab.jpeg'
import liver from '../images/liver.jpeg'
import kidney from '../images/kidney.jpeg'
import heart from '../images/heart.jpeg'
import cancer from '../images/cancer.jpg'
import "../styles/home.css"
function Home() {
  return (
    <div className="home-container">
     <div className="homewall">
        <img src={wall} alt=""/>
     </div>
     <div className='about'>
        <h2>About</h2>
    <p>This is a machine learning application that utilizes user input to predict the presence of a disease.</p>    </div>
     <div className='left'>
      <img src={diab} alt=""/>
      <div className='info'>
        <h3>Diabetes</h3>
        <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose 
          from food get into your cells to be used for energy.
          Sometimes your body doesn’t make enough—or any—insulin or doesn’t use insulin well. Glucose then stays in your blood and doesn’t reach your cells.
        </p>
        <br></br>
        <p><b>Applied Models and Accuracies</b></p>
        <p>
        Support Vector Machine - 81.8% </p>
        <p>  Random Forest - 79.92%  </p>
        <p>  Naive Bayes - 75.97% </p>
        <p>  Decision Tree - 75.97% 
        </p>
        </div>
     </div>
     <div className='left'>
      <img src={liver} alt=""/>
      <div className='info'>
        <h3>Liver Disease</h3>
        <p>
        The liver is an organ about the size of a football. It sits just under your rib cage on 
        the right side of your abdomen. The liver is essential for digesting food and ridding your
         body of toxic substances.Liver disease can be inherited (genetic). Liver problems can also
        be caused by a variety of factors that damage the liver, such as viruses, alcohol use and 
        obesity.
        </p>
        <br></br>
        <p><b>Applied Models and Accuracies:</b></p>
        
          <p>Random Forest using gridCV - 83.61%</p>
          <p>Random Forest - 82.77%</p>
          <p>Gradient Boosting - 77.31%</p>
          <p>AdaBoost - 76.47%</p>
        
        </div>
     </div>

     <div className='left'>
      <img src={kidney} alt=""/>
      <div className='info'>
        <h3>Kidney Disease</h3>
        <p>
        Chronic kidney disease (CKD) is a long-term condition where the kidneys do not work as well
         as they should.It's a common condition often associated with getting older. It can affect 
         anyone, but it's more common in people who are black or of south Asian origin.CKD can get 
         worse over time and eventually the kidneys may stop working altogether, but this is 
         uncommon. Many people with CKD are able to live long lives with the condition.
        </p>
        <br></br>
        <p><b>Applied Models and Accuracies:</b></p>
        
          <p>Random Forest - 97.5%</p>
          <p>Naive Bayes - 95%</p>
          <p>Gradient Boosting - 97.5%</p>
          <p>Support Vector Machine - 94.17%</p>
        
        </div>
     </div>

     <div className='left'>
      <img src={heart} alt=""/>
      <div className='info'>
        <h3>Heart Disease</h3>
        <p>
        Cardiovascular disease is a group of diseases affecting your heart and blood vessels. 
        These diseases can affect one or many parts of your heart and/or blood vessels. 
        A person may be symptomatic (physically experiencing the disease) or asymptomatic 
        (not feeling anything at all).
        </p>
        <br></br>
        <p><b>Applied Models and Accuracies:</b></p>
        
        
        <p> Naive Bayes - 85.25 %</p>
        <p> Support Vector Machine - 81.97 %</p>
        
        <p> Decision Tree - 81.97 %</p>
        <p>Random Forest - 90.16 %</p>
        
       
        </div>
     </div>

     <div className='left'>
      <img src={cancer} alt=""/>
      <div className='info'>
        <h3>Breast Cancer</h3>
        <p>
        Breast cancer is a disease in which cells in the breast grow out of control. 
        There are different kinds of breast cancer. The kind of breast cancer depends on 
        which cells in the breast turn into cancer.Breast cancer can begin in different parts of the breast. 
        </p>
        <br></br>
        <p><b>Applied Models and Accuracies:</b></p>
        
        <p>Random Forest - 90.48 %</p>
        <p>AdaBoost - 90.48 %</p>
        <p>Gradient Boost - 88.1%</p>
        <p> Support Vector Machine - 76.19 %</p>
        <p> Decision Tree - 76.19 %</p>
        
        </div>
     </div>

    </div>
  );
}

export default Home
