window.BENCHMARK_DATA = {
  "lastUpdate": 1684135338071,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "445e4d68e25d8322a38c01e059769dce027b0ead",
          "message": "Changelog",
          "timestamp": "2023-05-15T15:47:51+09:00",
          "tree_id": "93e901805fd0f4bf5d6425385e28af3603dccc18",
          "url": "https://github.com/greymistcube/libplanet/commit/445e4d68e25d8322a38c01e059769dce027b0ead"
        },
        "date": 1684133931125,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1062410.4166666667,
            "unit": "ns",
            "range": "± 83185.0840363845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855911.7647058824,
            "unit": "ns",
            "range": "± 87844.22700288764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1710161.3636363635,
            "unit": "ns",
            "range": "± 57171.96912745969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3870153.947368421,
            "unit": "ns",
            "range": "± 192455.89308776835"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33938.27160493827,
            "unit": "ns",
            "range": "± 1793.63931025963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5047771.428571428,
            "unit": "ns",
            "range": "± 31333.182916013364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12963950,
            "unit": "ns",
            "range": "± 147205.5139365823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33215360,
            "unit": "ns",
            "range": "± 362165.5852546693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67150690,
            "unit": "ns",
            "range": "± 421186.19703336497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133541660,
            "unit": "ns",
            "range": "± 1389741.1371495463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3453492.606026786,
            "unit": "ns",
            "range": "± 8329.446844829616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1094871.89453125,
            "unit": "ns",
            "range": "± 3568.2759411183833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 825767.8841145834,
            "unit": "ns",
            "range": "± 1221.5010722724662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900430.6919642857,
            "unit": "ns",
            "range": "± 15652.784617508441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594050.6770833334,
            "unit": "ns",
            "range": "± 1082.5574619535353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 533589.9204799107,
            "unit": "ns",
            "range": "± 695.260774002764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2163848.275862069,
            "unit": "ns",
            "range": "± 55988.64438877415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2307087.5,
            "unit": "ns",
            "range": "± 71632.36676071743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2878640,
            "unit": "ns",
            "range": "± 85354.6725003796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2939685.714285714,
            "unit": "ns",
            "range": "± 92055.1629470617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4716090.384615385,
            "unit": "ns",
            "range": "± 192600.77195253375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191259.18367346938,
            "unit": "ns",
            "range": "± 7424.562792047841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182912.7659574468,
            "unit": "ns",
            "range": "± 7076.741359560929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163568.3673469388,
            "unit": "ns",
            "range": "± 9488.295523756586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2838485.714285714,
            "unit": "ns",
            "range": "± 31019.295660873788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555513.3333333335,
            "unit": "ns",
            "range": "± 40802.71116108877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15402.127659574468,
            "unit": "ns",
            "range": "± 1465.4426997015075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65048.83720930233,
            "unit": "ns",
            "range": "± 3788.240137305619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52109.41176470588,
            "unit": "ns",
            "range": "± 2831.734431043134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67883.14606741573,
            "unit": "ns",
            "range": "± 9112.344723144635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3909.183673469388,
            "unit": "ns",
            "range": "± 649.6766419628611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13605.31914893617,
            "unit": "ns",
            "range": "± 1430.7203254783594"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "5ecc71293242deb62556f50c242468610031664f",
          "message": "Removed Mint and Transfer actions",
          "timestamp": "2023-05-15T15:46:20+09:00",
          "tree_id": "a2f130184a564a1228584bf58e9d0d9af6197c4f",
          "url": "https://github.com/greymistcube/libplanet/commit/5ecc71293242deb62556f50c242468610031664f"
        },
        "date": 1684134093931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1374431.9587628867,
            "unit": "ns",
            "range": "± 109729.7670666364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2484554.5454545454,
            "unit": "ns",
            "range": "± 87057.29590078034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2148122.1052631577,
            "unit": "ns",
            "range": "± 139767.06395189633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5211906.12244898,
            "unit": "ns",
            "range": "± 181037.44249943076"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43675.2808988764,
            "unit": "ns",
            "range": "± 2434.6588756237966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7063066.666666667,
            "unit": "ns",
            "range": "± 41649.68987479579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17592076.666666668,
            "unit": "ns",
            "range": "± 61394.30483902124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45485620,
            "unit": "ns",
            "range": "± 358163.82963267365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90508240,
            "unit": "ns",
            "range": "± 371680.2058605912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182644957.69230768,
            "unit": "ns",
            "range": "± 353636.264311082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4838932.310267857,
            "unit": "ns",
            "range": "± 17137.677320151775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510396.8374399038,
            "unit": "ns",
            "range": "± 3833.6974261746873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1152731.0546875,
            "unit": "ns",
            "range": "± 3283.1497036517117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639633.565848214,
            "unit": "ns",
            "range": "± 21309.86590172561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847845.8286830357,
            "unit": "ns",
            "range": "± 5505.336877036154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749515.4361979166,
            "unit": "ns",
            "range": "± 10994.797096057144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018471.4285714286,
            "unit": "ns",
            "range": "± 29510.061610639452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3258128.5714285714,
            "unit": "ns",
            "range": "± 140188.57522414808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4046734.782608696,
            "unit": "ns",
            "range": "± 98004.53889626119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4053785.714285714,
            "unit": "ns",
            "range": "± 131303.89121705227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6508738.888888889,
            "unit": "ns",
            "range": "± 138399.96658826902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259333.96226415093,
            "unit": "ns",
            "range": "± 9616.171143448264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247620.89552238805,
            "unit": "ns",
            "range": "± 11653.60572778297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234394.94949494948,
            "unit": "ns",
            "range": "± 16443.604139277373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3857866.6666666665,
            "unit": "ns",
            "range": "± 14931.165291754593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3561186.6666666665,
            "unit": "ns",
            "range": "± 24657.30452962502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18703.225806451614,
            "unit": "ns",
            "range": "± 1719.6720878590695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90831.31313131313,
            "unit": "ns",
            "range": "± 8710.709412107188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68161.34020618557,
            "unit": "ns",
            "range": "± 4884.027459669339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88997.93814432989,
            "unit": "ns",
            "range": "± 12233.756061452836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4925,
            "unit": "ns",
            "range": "± 876.1158298811985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18272.63157894737,
            "unit": "ns",
            "range": "± 1786.5003293175557"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b86de079d57c6e713ce2bea88d33ea6f1cd45fd",
          "message": "Merge pull request #3157 from greymistcube/remove/native-tokens\n\n🧹 Remove remaining native tokens related API",
          "timestamp": "2023-05-12T20:36:42+09:00",
          "tree_id": "bed97323e9fdde44e5164e36835e6bcc173687b6",
          "url": "https://github.com/greymistcube/libplanet/commit/2b86de079d57c6e713ce2bea88d33ea6f1cd45fd"
        },
        "date": 1684134207939,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642236.4583333333,
            "unit": "ns",
            "range": "± 128953.64252302506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3171915.4929577466,
            "unit": "ns",
            "range": "± 154503.72501093146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2586202.1276595746,
            "unit": "ns",
            "range": "± 172675.28104391904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6339626.923076923,
            "unit": "ns",
            "range": "± 258088.87670828242"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61255.913978494624,
            "unit": "ns",
            "range": "± 4665.51787436273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9336513.333333334,
            "unit": "ns",
            "range": "± 88497.81164902705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24283484.615384616,
            "unit": "ns",
            "range": "± 648728.1894243892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61486841.666666664,
            "unit": "ns",
            "range": "± 2036829.9029023368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119753678.57142857,
            "unit": "ns",
            "range": "± 1610883.5923079709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243823006.66666666,
            "unit": "ns",
            "range": "± 4043810.6800864153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5924099.776785715,
            "unit": "ns",
            "range": "± 67660.00387856734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1862233.4114583333,
            "unit": "ns",
            "range": "± 26065.095368050264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1423572.8236607143,
            "unit": "ns",
            "range": "± 16434.540259102883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3220901.3020833335,
            "unit": "ns",
            "range": "± 58998.75379112943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1011288.57421875,
            "unit": "ns",
            "range": "± 9763.935851436023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922628.8346354166,
            "unit": "ns",
            "range": "± 7319.064611846058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3927530,
            "unit": "ns",
            "range": "± 87200.7912808135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4062950,
            "unit": "ns",
            "range": "± 82821.3119063104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5002786.956521739,
            "unit": "ns",
            "range": "± 116073.05420744076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5080020,
            "unit": "ns",
            "range": "± 78949.470277785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883458.333333333,
            "unit": "ns",
            "range": "± 172093.02316825168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319607.8431372549,
            "unit": "ns",
            "range": "± 10950.23000922364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310217.0731707317,
            "unit": "ns",
            "range": "± 10904.33176400609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289162.5,
            "unit": "ns",
            "range": "± 11335.83331834394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4905831.25,
            "unit": "ns",
            "range": "± 90878.33052127076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4417400,
            "unit": "ns",
            "range": "± 77875.4408380093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25580.21978021978,
            "unit": "ns",
            "range": "± 1978.3955216409177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113347.31182795699,
            "unit": "ns",
            "range": "± 9403.59079655733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101976.04166666667,
            "unit": "ns",
            "range": "± 9636.70335410859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121981.05263157895,
            "unit": "ns",
            "range": "± 16277.62002793394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7607.368421052632,
            "unit": "ns",
            "range": "± 1317.899852946504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26421.739130434784,
            "unit": "ns",
            "range": "± 2037.981445146073"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "3e70352d4c200566dc78185e4e0d1be970ef06b4",
          "message": "Fixed tests",
          "timestamp": "2023-05-15T16:00:01+09:00",
          "tree_id": "716e5769da49fa706ed7301338cf25118542a229",
          "url": "https://github.com/greymistcube/libplanet/commit/3e70352d4c200566dc78185e4e0d1be970ef06b4"
        },
        "date": 1684135313970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449401.0204081633,
            "unit": "ns",
            "range": "± 163077.00002481148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2688230.612244898,
            "unit": "ns",
            "range": "± 217676.66715650423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2271811.224489796,
            "unit": "ns",
            "range": "± 196300.447653592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5660894.897959184,
            "unit": "ns",
            "range": "± 456392.889246912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54275,
            "unit": "ns",
            "range": "± 5337.316495058266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7453486.458333333,
            "unit": "ns",
            "range": "± 484610.71911158855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20376107,
            "unit": "ns",
            "range": "± 1233867.3462460716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52155314.51612903,
            "unit": "ns",
            "range": "± 2373873.1935484936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100968729.8245614,
            "unit": "ns",
            "range": "± 4367689.314891347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203659153.65853658,
            "unit": "ns",
            "range": "± 7336410.475569696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5177477.9296875,
            "unit": "ns",
            "range": "± 111166.43313301008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1609826.7944335938,
            "unit": "ns",
            "range": "± 29605.233535048974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234308.8704427083,
            "unit": "ns",
            "range": "± 18429.523524807235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2888977.7604166665,
            "unit": "ns",
            "range": "± 36709.38230960048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 896608.8960193453,
            "unit": "ns",
            "range": "± 20470.496416415826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 824741.2955729166,
            "unit": "ns",
            "range": "± 14907.658968602054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183983.673469388,
            "unit": "ns",
            "range": "± 289654.6178966266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419545.4545454546,
            "unit": "ns",
            "range": "± 260673.09626596127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4171689.7959183673,
            "unit": "ns",
            "range": "± 329509.5022298322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4264083.838383839,
            "unit": "ns",
            "range": "± 327336.9027460884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7429384.931506849,
            "unit": "ns",
            "range": "± 367125.0417740047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283089.4736842105,
            "unit": "ns",
            "range": "± 17437.276490959604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265841.93548387097,
            "unit": "ns",
            "range": "± 23358.851420638053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235517.67676767678,
            "unit": "ns",
            "range": "± 24872.498657060478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4160697.97979798,
            "unit": "ns",
            "range": "± 280274.05610667815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3951710.101010101,
            "unit": "ns",
            "range": "± 237131.57481550088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18888.709677419356,
            "unit": "ns",
            "range": "± 2087.1257674477743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91581.81818181818,
            "unit": "ns",
            "range": "± 8385.073760355648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76930.61224489796,
            "unit": "ns",
            "range": "± 8991.076998929175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100135.71428571429,
            "unit": "ns",
            "range": "± 16078.037783544116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5504.255319148936,
            "unit": "ns",
            "range": "± 880.2388353336081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19405.434782608696,
            "unit": "ns",
            "range": "± 2352.476559443881"
          }
        ]
      }
    ]
  }
}