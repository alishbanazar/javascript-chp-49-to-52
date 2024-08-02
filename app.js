//         Chapter 49-52
//TASK 2
//Suppose in your webpage there is content area in which you have entered your item details, but user can only see
//some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

function expandAndStretch(){
    var fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo deserunt placeat quibusdam explicabo assumenda eligendi odio, debitis expedita natus illum aut voluptates. Odit rerum illum non fugiat neque reiciendis dolorem pariatur repellendus, velit tenetur debitis sunt dolore deserunt excepturi modi eveniet, iste quia ex nulla est? Dolorem aspernatur, quae atque facere similique veniam itaque minima est blanditiis? Ipsa reiciendis ut perspiciatis necessitatibus distinctio. Aliquid fugiat doloremque quod, excepturi libero ab numquam placeat dolorem ipsum. Exercitationem, quam mollitia eveniet alias delectus hic, quod unde illum sapiente aspernatur officia adipisci expedita incidunt! Laudantium autem iste itaque, eum aliquid molestias reprehenderit aut vel beatae libero ipsum dolorum quaerat earum saepe rem nisi repellendus possimus incidunt. Neque, quidem at quas dolor consequatur, ea dignissimos sapiente quibusdam exercitationem consectetur aliquam. Porro numquam quidem reprehenderit, maiores, quia laboriosam minima repudiandae dicta cumque iure ab, consequatur quas. Ex, id vel? Asperiores, at eveniet aliquid omnis fugiat consectetur debitis accusantium culpa laboriosam neque, alias ratione placeat corrupti? Cum, dicta, dolore dignissimos itaque quisquam mollitia officia, odit vitae totam nostrum eveniet necessitatibus at eius voluptas provident quos voluptatem doloremque nihil neque. Veniam ratione tempora animi cumque sit. Excepturi labore cupiditate quos rem odio reprehenderit optio necessitatibus quo fugit?😊😎"
   
    var shortText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates sunt debitis eveniet mollitia sit ab ad et natus impedit sint veniam, illum at unde? Alias, explicabo quae eligendi culpa, impedit provident mollitia deserunt praesentium adipisci, fugiat libero eos cupiditate. Optio laudantium corporis fugit reiciendis, illo dicta sapiente quibusdam quaerat nobis doloribus natus non unde voluptatem. Temporibus consectetur, unde ratione impedit molestiae minus praesentium perferendis saepe dicta cupiditate facere corporis explicabo tempora voluptatum quia, quis est a! Accusantium, nihil debitis repudiandae officiis sint sed id quod nesciunt quis, mollitia aliquid omnis commodi alias enim excepturi, obcaecati inventore? Nihil, possimus modi?"

    var paraText = document.getElementById("para");
    var button = document.getElementById("btn");

    if(paraText.innerText == shortText){
        paraText.innerText = fullText
        button.innerText = "Read less"
    }
    else{
        paraText.innerHTML = shortText
        button.innerText = "Read more"
    }
}
