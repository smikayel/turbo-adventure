import styles from "./index.module.scss"

export default function AuthButton(props: {text: string, navigateUrl: string, isSignUp: boolean}) {
    return (
        <a 
            href={props.navigateUrl} 
            className={`${styles.loginBtn} + ${props.isSignUp ?  styles.signUp : ''}`}
        >
            {props.text}
        </a>
    )
}