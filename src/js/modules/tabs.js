function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(tab => {
            tab.classList.add("hide");
            tab.classList.remove("show");
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener("click", (e) => {
        if( e.target && e.target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if(e.target === item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

}

export default tabs;