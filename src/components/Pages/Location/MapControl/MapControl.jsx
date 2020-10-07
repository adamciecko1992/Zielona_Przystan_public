import React from 'react'

export default function MapControl(props) {

    return (
        <div className="btn-group mt-3 d-block p-0" role="group">
            <button
                className="btn btn-secondary text-white"
                onClick={() => {
                    props.goTo(51.769195, 19.456278, "home");

                }}
                type="button"
            >
                {props.content.home}
            </button>
            <button
                className="btn  btn-secondary  text-white"
                onClick={() => props.goTo(51.7701503, 19.4593799, "parking1")}
                type="button"
            >
                {props.content.parking1}
            </button>
            <button
                className="btn btn-secondary  text-white"
                onClick={() => props.goTo(51.7705207, 19.4574808, "parking2")}
                type="button"
            >
                {props.content.parking2}
            </button>
        </div>
    )
}
