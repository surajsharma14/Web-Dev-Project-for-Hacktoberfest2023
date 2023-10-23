from utils import generate_random_password
import streamlit as st
import pyperclip
custom_val=[6,7,8,9,10,11,12,13,14,15]
st.header("Random password generator using python")
#hides the "made with streamlitt footer"
hide_st_style= """
<style>
#MainMenu {visiblity: hidden;}
footer {visibility: hidden;}
</style>"""

#chaninging background 
pg_bg= """
<style>
[data-testid="stAppViewContainer"]{
background-color: #444cf755;
opacity: 0.8;
background-image: repeating-radial-gradient( circle at 0 0, transparent 0, #000000 10px ), repeating-linear-gradient( #00000055, #000000 );

 

}

</style>"""
st.markdown(pg_bg,unsafe_allow_html=True)
st.markdown(hide_st_style, unsafe_allow_html=True)
length=st.slider("Select length of password" ,min_value=6,max_value=15,step=1)
#length=st.number_input
generatebtn=st.button("Generate")

if generatebtn:
 st.subheader("Generated password")
 st.spinner(text="Please wait...")
 str=generate_random_password(length)
 st.write(str)
 #copybtn=st.button("Copy Password")
 #if copybtn:
 pyperclip.copy(str)
 st.success("Password Copied to clipboard!")





