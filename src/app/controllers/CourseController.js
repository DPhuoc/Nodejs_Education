const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[Get] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                courses = courses.toObject();
                res.render('./courses/show', courses);
            })
            .catch(next);
    }

    //[Get] /course/create
    create(req, res, next) {
        res.render('./courses/create');
    }

    //[Post] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    //[Get] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id) 
            .then(course => res.render('./courses/edit', { 
                course: mongooseToObject(course)
            }))
            .catch(next);
    }

    //[Put] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
