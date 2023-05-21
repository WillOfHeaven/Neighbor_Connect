
import React from 'react'
import './post.css';
const Post = () => {
  return (
    <div className='post'>
        <form>
            <div id='left'>
                <h4>Your Details</h4>
            <div id='fields'>
            <p>Name<span>*</span></p>
            <input type='text' id='nameofPer'></input>
            </div>
            <div id='fields'>
            <p>Address<span>*</span></p>
            <textarea id='address'></textarea>
            </div>
            <div id='fields'>
            <p>Issue<span>*</span></p>
            <textarea id='issue'></textarea>
            </div>
            <div id='fields'>
            <p>Link</p>
            <input type='url' id='url'></input>
            </div>
            <div id='fields'>
            <p>File</p>
            <input type='file' id='filename'></input>
            </div>
            {/* <div id='fields'>
            <p>Image</p>
            <input type='image'></input>
            </div> */}
            </div>
            <div id='right'>
                <h4>Details of the Animal</h4>
            <div id='fields'>
            <p>Name of the Animal<span>*</span></p>
            <input type='text' id='nameofani'></input>
            </div>
            <div id='fields'>
            <p>Tag Id<span>*</span></p>
            <input type='text' id='tagid'></input>
            </div>
            <div id='fields'>
            <p>Status<span>*</span></p>
            </div>
            <div id='radio'>
            <div id='fields'>
            <input type='radio' name='status' id='li'></input>
            <p>Lightly Injured</p>
            </div>
            <div id='fields'>
            <input type='radio' name='status' id='bi'></input>
            <p>Badly Injured</p>
            </div>
            <div id='fields'>
            <input type='radio' name='status' id='not'></input>
            <p>Not in a good Condition</p>
            </div>

            </div>

            <button>Submit</button>

            </div>

        </form>
    </div>
  )
}

export default Post