import React from "react";

const HeaderText = ({ first, sec }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row',  }}>

                <span style={{ fontSize: 30, borderBottomWidth: 2, borderColor: '#AB6CF2', color: '#AB6CF2', marginRight: 8 }}>{first}</span>
                <span style={{ fontSize: 30, fontWeight: 'bold', color: '#4B0891', marginLeft: 8 }}>{sec}</span>
            </div>

        </div>

    );
}

export default HeaderText;