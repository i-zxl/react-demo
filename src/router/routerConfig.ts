import Dashboard from '../pages/home/dashboard';
import Life from '../pages/life';
import LifeDetail from '../pages/life/detail';
import Study from '../pages/study';
import StudyDetail from '../pages/study/detail';

const route = [
    {
        component: Dashboard,
        meta: {
            level: [],
            title: "首页",
            show: true,
        },
        path: '/',
    },
    {
        component: Life,
        childRoutes: [{
            component: LifeDetail,
            meta: {
                title: '生活详情',
                show: false
            },
            path: '/life/:id'
        }],
        meta: {
            level: [],
            title: "生活",
            show: true
        },
        path: '/life',
    },
    {
        component: Study,
        childRoutes: [
            {
                component: StudyDetail,
                meta: {
                    title: '学习详情',
                    show: false
                },
                path: '/study/:id'
            }
        ],
        meta: {
            level: [],
            title: "学习",
            show: true
        },
        path: '/study'
    }
]

export default route;