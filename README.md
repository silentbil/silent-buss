# Bus card for home assistant
show real time bus information

## Demo

![silentbuss1](https://user-images.githubusercontent.com/10948399/235174037-5a644b38-eece-475d-b9bf-6b88140e622f.png)


## HACS Installation (Preferred option with updates)

soon

## HACS manual Installation 
 - In the HACS Frontend, click the 3 dots in the upper right
 - Click 'Add Custom Repository'
 - Fill in the repo url https://github.com/silentbil/silent-bus and choose 'Lovelace' category.
 - Install the custom card (should now appear in the Frontend)
 - HACS should automatically add the following to your resources:
```
url: /hacsfiles/silent-bus/silent-bus.js
type: Javascript Module
```

## Adding the Card to the Dashboard
Add a Manual card to the dashboard and enter the YAML to configure it as desired.

### Options
| Name | Description | Default | Required |  Values |
| --- | --- | --- | --- | --- |
| `station` | station number | None | Yes  | number |
| `busLines` | bus lines | None | Yes | Array of numbers |


## Find your station number

* Go to: https://xn--4dbclabp0e.co.il/searchStations and search for your station
* Copy your station number
![image](https://user-images.githubusercontent.com/10948399/235173621-064ea677-024d-4741-ac97-7d94335edee9.png)


## Examples

```
type: custom:silent-bus
station: 24068
busLines:
  - 249
  - 40
  - 605
```
