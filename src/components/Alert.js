import React from 'react'

export default function Alert(prop) {
    return (
        prop.alert &&
        <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
            <div>
                {prop.alert.type} : {prop.alert.msg}
            </div>
        </div>
    )
}
