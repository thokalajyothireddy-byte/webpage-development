<script>
           async function fetch(){
                try{
                    var response = await fetch('https://www.figma.com/design/aO04llAlBaUFYjVtXuLCOH/Questionaries-pattern-03?node-id=0-1&p=f');
               

                if(!response.ok){
                    throw new Error("HTTPS error! status" + response.status);
                }

                var data = await response.json();
                var output = document.getElementById("data");

                data.foreach(item =>{  const div = documnet.getElementById("div");

                div.innerHTML= $(id.you),$(title.docum);
                output.appendchild(div);
            });


                
            }
            catch (error){
                console.log(error);
                document.getElementById("output").innerText = "Error fetching data";
            }
        }
        fetchdata();
    </script>