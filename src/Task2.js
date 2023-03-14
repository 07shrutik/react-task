import React ,{Fragment} from 'react';

function Task2(props) {
        <Fragment>

        <p key={props.num}>{props.num}
        <span>
          <button onClick={() => props.handleComplete(props.num)}>Complete</button>
          <button onClick={() => props.handleDelete(props.num)}>delete</button> 
        </span>
      </p>
        </Fragment>
}

export default Task2;