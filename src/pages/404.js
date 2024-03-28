import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push('/news')
    }, 5000);
  return (
    <div>
      <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg' alt='404 Not Found' width='100%' />
    </div>
  )
}

export default ErrorPage
