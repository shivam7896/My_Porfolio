import React from 'react'

function navbar() {
  return (
    <> 
        <div className="flex">
            <div className="left">Ultra</div>

            <div className="right">
                <ul><a href="">Home</a></ul>
                <ul><a href="">Experience</a></ul>
                <ul><a href="">Try Out</a></ul>
            </div>
        </div>

    </>
  )
}

export default navbar