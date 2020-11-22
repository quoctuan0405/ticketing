import axios from 'axios';

const buildRequest = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    if (process.env.NODE_ENV === 'development'|| process.env.NODE_ENV === 'test') {
      return axios.create({
        baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
        headers: req.headers
      });
    }
    
    return axios.create({
      baseURL: 'https://tuan-ticketing-app.xyz/',
      headers: req.headers
    });

  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};

export default buildRequest;