"""A Number minimizer"""

import random;
import from mtllm.llm {Model}

glob llm = Model(model_name="groq/llama-3.3-70b-versatile");

"""solve given mathamatical problem"""
def fun(guess: str, correct_number: str) -> str by llm();


# Will run when in CLI mode (not in cloud)
 with entry:__main__ {
    print(fun('3x^2+5x+sinh(x)','integration by x'));
}