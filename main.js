
let id = $("input[name*='book_id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let Student_Name = $("input[name*='Student_name']");
    let Branch = $("input[name*='Branch']");
    let Course = $("input[name*='Course']");

    id.val(textvalues[0]);
    Student_Name.val(textvalues[1]);
    Branch.val(textvalues[2]);
    Course.val(textvalues[3].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}