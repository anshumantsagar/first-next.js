import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

const errorPage = () => {
    return (
        <div>
            <h1>Opps Something went wrong!</h1>
            <p>Try <Link href="/"><a>Going Back To Home Page</a></Link></p>
            <button onClick={() => Router.push('/')}>Go To Home</button>
            <style jsx>{`
                h1{
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 20px;
                    text-align: center;
                }
                button{
                    background-color:white;
                    color: black;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 10px;
                    border: none;
                    border-radius: 30px;
                }
                button:hover{
                    background-color:#2e2e2e;
                    color:white;
                    box-shadow: 0 2px 3px #968e8d;
                }
            `}</style>
        </div>
    );
}

export default errorPage;