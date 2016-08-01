const coursesRules = [{
    method: 'GET',
    path: '/course_lesson',
    config: { auth: false },
    handler: (request, reply) => {
        let columns = ['Id', 'Asignatura', 'Curso', 'Año', 'Profesores'];
        reply.view('administration/course_lesson', { columns });
    }
}]
export default coursesRules;
