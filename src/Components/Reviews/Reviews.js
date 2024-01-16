import './Reviews.css'
import person1 from '../../person/p1.jpg'
import person2 from '../../person/p2.jpg'
import person3 from '../../person/p3.jpg'
import person4 from '../../person/p4.jpg'
import person5 from '../../person/p5.jpg'
import person6 from '../../person/p6.jpg'

const Reviews = () => {
    return (
        <div>
            <h1 className="reviews__title">Reviews</h1>
            <div className="reviews">

                <h5>Reviews:(6)</h5>
                <div className="person">
                    <div className="image">
                        <img src={person1} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src={person2} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src={person3} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src={person4} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src={person5} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
                <div className="person">
                    <div className="image">
                        <img src={person6} alt="" height={50} width={50} />
                    </div>
                    <div className="comment">
                        <p>well work</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;