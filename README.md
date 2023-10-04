Liatrio Assessment - Kelby Springer


Prerequisites before running Initial command:
    1. Have github cli installed. Use one of the following methods.
        - https://cli.github.com/
        - https://github.com/cli/cli#installation
    2. Ensure that the needed scripts have executable file permissions by running (within the root project directory):
        sudo chmod +x ./scripts/*.sh

************ 0 - WHAT IS RUNNING? ************


************ 1 - RUN INSTRUCTIONS ************

Running Initial command:
    run the "activation-script" script using the following command (within the project directory):
        bash ./scripts/activation-script.sh

************ 2 - RUNNING INFORMATION ************

Visiting URL link:
    1. Run the "get-url-script" script using the following command (within the project directory):
        bash ./scripts/get-url-script.sh
    2. Copy the URL from "latest-url-link.txt" and past it into your browser.
    3. Wait & refresh the page until it displays the JSON payload (This may take a few minutes...)
        *** If there is an error wait a bit longer, but run the "cleanup-script.sh" as a last resort to reset.

************ 3 - CLEAN-UP INSTRUCTIONS ************

Running Initial command:
    run the "cleanup-script" script using the following command (within the project directory):
        bash ./scripts/cleanup-script.sh

