const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    //[Get] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(courses => {
                courses = courses.toObject();
                res.render('./courses/show', courses)
            })
            .catch(next);
    }
}

module.exports = new CourseController();
