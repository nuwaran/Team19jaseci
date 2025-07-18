import os;
import from mtllm.llm { Model }


glob llm = Model(model_name="groq/llama-3.3-70b-versatile");


"""Randomly select one of the equipment options: paper, rock, or scissor.
We will give your past guess as a list to make proper guess and make sure only paper,rock or scissor must be answer ,make sure don't follow pattern when selecting options that will easy for palyer you need to win this game"""
def game(history: list) -> str byllm();


walker echo {
    has history: list;
    obj __specs__ {
        static has methods: list = ["post"];
        static has auth: bool = False;
    }

    can echo_back with `root entry {
        report {"echo" : game(self.history) } ;
    }
}


walker check_env {
    obj __specs__ {
        static has methods: list = ["post"];
        static has auth: bool = False;
    }

    can go with `root entry {
        report {"GROQ_API_KEY" : os.environ.get("GROQ_API_KEY", "Not set") } ;
    }
}
