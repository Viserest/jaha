export async function onRequestPost(context){
    const body = await context.request.json();
    var resp;
    
    if(body.name.length >= 40){
        resp = [400,"Name field is too long. Must be shorter than 40 characters."];
    } else if(!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(body.phone))){
        resp = [400,"Phone number format is invalid."];
    } else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(body.email))){
        resp = [400,"Email format is invalid."];
    } else if(!(["families","seniors","regular","ultimate","events"].includes(body.session))){
        resp = [400,"Session type is invalid."];
    } else if(!(/20[0-9]{2}-[0-1][1-9]-[0-3][0-9]$/i.test(body.date))){
        resp = [400,"Date is invalid."];
    } else {
        try {
            const { results } = await context.env.database.prepare("INSERT INTO Booked VALUES (?1, ?2, ?3, ?4, ?5, ?6);").bind(body.name,body.phone,body.email,body.session,body.date,body.comment).run();
            console.log(results);
        } catch (e) {
            console.log(e);
        }
        resp = [200,null];
    }
    
    return new Response(JSON.stringify({"status":resp[0],"error":resp[1]}));
}