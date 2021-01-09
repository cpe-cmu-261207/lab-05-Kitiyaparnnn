import { GRADES } from "../utils/grades";
const CourseCard = (props) => {
  const NumbertoString = () => GRADES.find((value) => props.gradee == value.value).name
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2 shadow-md rounded-3xl">
        <div>
          <h3 className="text-xl my-1 text-green-400 italic">course name : {props.name}</h3>
          <h5 className="text-xl my-1">course code : {props.code}</h5>
          <h5 className="text-xl my-1">credit : {props.creditt}</h5>
          <h3 className="text-xl my-1 text-yellow-300">course grade : {props.gradee == 'W' ? 'W' : NumbertoString()  }</h3>
        </div>
        <span onClick={() => props.onDeleteCourse(props.code)} className="text-danger fs-4"><i class="fas fa-backspace"></i></span>
    </li>
  );
};

export default CourseCard;
