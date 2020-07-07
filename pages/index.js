import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

class IndexPage extends React.Component {
    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName:'Super App'})
            },1000)
        });
        return promise;
    }
    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>
                    Go To{" "} 
                    <Link href="/auth">
                        <a>Auth</a>
                    </Link>
                </p>
                <button onClick={() => Router.push('/auth')}>Go To Auth</button>
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
}

export default IndexPage;