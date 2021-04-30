$(document).ready(function(){

    $.ajax({
        url: 'https://randomuser.me/api/?results=20',
        dataType: 'json',
        success: function(res) {
            var data = res.results
            console.log(data);
            // console.log(data[0].name.first);

            var html_str = ''
            var card_str = ''
            for (var i = 0; i < data.length; i++){
                console.log(data[i])
                card_str += `<div class="col-12 col-sm-6 col-md-3"
                <div class="card">
                <img class="card-img-top" src="${data[i].picture.large}" alt="User Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].name.first} ${data[i].name.last}, ${data[i].dob.age}</h5>
                        <h6>${data[i].login.username}</h6>
                        <p class="card-text">
                        ${data[i].location.city},
                        ${data[i].location.state},
                        ${data[i].location.country}</p>
                    </div>
                    </div>
                </div>\n`
                
                html_str += `<tr>
                \n\t<td scope="row">${data[i].name.first} ${data[i].name.last}</td>
                \n\t<td>${data[i].dob.age}</td>
                \n\t<td>${data[i].email}</td>
                \n\t<td>${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}</td>
            \n</tr>\n`
            }
            // console.log(card_str)
            $('.card-deck').append(card_str)
            // console.log(html_str)
            $('tbody').append(html_str)
        }
    });

})
