import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";

import MyModal from "./UI/MyModal/MyModal";
import FormQtyPok from "./FormQtyPok";


const Header = ({title, qty, setQty}) => {
    const [modal, setModal] = useState(false)

    return (
        <div className="header row justify-content-md-center">
            <h1 className="col col-lg-3">
                {title}{qty}
            </h1>
            <MyModal visible={modal} setVisible={setModal}>
                <FormQtyPok qty={qty} setQty={setQty} setModal={setModal} />
            </MyModal>
            <MyButton type="button"
                      title="Input quantity pokemons..."
                      className="col-lg-3"
                      onClick={() => setModal(true)}
            />
        </div>
    );
};

export default Header;

