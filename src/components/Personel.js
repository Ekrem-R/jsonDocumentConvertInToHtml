import React from 'react';

const Personel =(props) => {
    

        return(
            <div className="row">

                {props.personel.map((personel) => (
                     <div className="col-lg-4" key={personel.id}>
                     <div className="card mb-4 shadow-sm">
                         <img src={personel.avatar} className="card-img-top" alt="Personel Detail" />
                         <div className="card-body">
                             <h1 className="card-text"> Personel Bilgisi</h1>
                             <h6 className="card-title"> First Name:{personel.first_name}</h6>
                             <h6 className="card-title"> Last Name:{personel.last_name}</h6>
                             <h6 className="card-title"> Gender:{personel.gender}</h6>
                             <h6 className="card-title"> Birthday:{personel.friends.birthday}</h6>                             
                             <div className="d-flex justify-content-between align-items-center">                                
                             </div>
                         </div>
                     </div>
                 </div>

                ))}
               

            </div>
        )
    
}
export default Personel;