const tabs=document.querySelectorAll(".tabs");//home,pricing,about seçtim
const tabContents=document.querySelectorAll("[data-tab-content]");//contentleri seçtim
// bunun ile loop yaptım
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    const target=document.querySelector(tab.dataset.tabTarget);// bunun sayesinde seçtiğim tag specificleşti
    tabContents.forEach(tabContent=>{
      tabContent.classList.remove("active")
    })
    tabs.forEach(tab=>{
      tab.classList.remove("active")
    });
    tab.classList.add("active")
    target.classList.add("active")
    
  })
})
