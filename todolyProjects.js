/**
 * Created by AnaPinto on 3/16/2016.
 */

var request = require('superagent'); //cargando el superagent
require('superagent-proxy')(request); //adicionando mas caracteristicas al suepragent con proxy


it('DELETE /projects.json', function(done){
    request
        .post('https://todo.ly/API/Projects')
        .proxy('http://172.20.240.5:8080')
        .set('Authorization','QW5hLlBpbnRvQEZ1bmRhY2lvbi1qYWxhLm9yZzpDb250cm9sMTIzIQ==')
        .send({Content:'Delete a project with SuperAgent'})
        .end(function(err,res){
            //
            //
            console.log(res.status);
            console.log(res.body);
            done();
        });
});


describe('Projects', function(){

    it('DELETE /projects.json', function(done){
        request
            .delete('https://todo.ly/API/Projects/3506569.json')
            .proxy('http://172.20.240.5:8080')
            .set('Authorization','QW5hLlBpbnRvQEZ1bmRhY2lvbi1qYWxhLm9yZzpDb250cm9sMTIzIQ==')
            //.send({Content:'Delete a project with SuperAgent'})
            .end(function(err,res){
                //
                //
                console.log(res.status);
                console.log(res.body);
                done();
            });
    });

    });


