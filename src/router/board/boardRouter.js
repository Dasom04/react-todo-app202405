import BoardDetail from '../../components/borad/BoardDetail';
import BoardList from '../../components/borad/BoardList';

const boardRoutes = [
  {
    path: 'list',
    element: <BoardList />,
  },
  {
    path: 'detail/:id',
    element: <BoardDetail />,
  },
  //   {
  //     path: 'write',
  //     element: <BoardWrite />,
  //   },
];
export default boardRoutes;
