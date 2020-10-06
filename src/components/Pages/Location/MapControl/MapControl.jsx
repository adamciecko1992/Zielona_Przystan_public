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
                Zielona Przystań
          </button>
            <button
                className="btn  btn-secondary  text-white"
                onClick={() => props.goTo(51.7701503, 19.4593799, "parking1")}
                type="button"
            >
                Parking
          </button>
            <button
                className="btn btn-secondary  text-white"
                onClick={() => props.goTo(51.7705207, 19.4574808, "parking2")}
                type="button"
            >
                Parking II
          </button>
        </div>
    )
}
