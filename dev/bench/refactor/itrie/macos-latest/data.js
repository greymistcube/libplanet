window.BENCHMARK_DATA = {
  "lastUpdate": 1691566603307,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482456143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8191843.0612244895,
            "unit": "ns",
            "range": "± 323136.21346928447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23337048.57142857,
            "unit": "ns",
            "range": "± 159385.92574892132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52781520.28571428,
            "unit": "ns",
            "range": "± 621530.1890760823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103905520.57142857,
            "unit": "ns",
            "range": "± 961087.4194968079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215877418.83333334,
            "unit": "ns",
            "range": "± 1707940.9372248547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67744.69892473119,
            "unit": "ns",
            "range": "± 9820.155410070332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340449.84831460676,
            "unit": "ns",
            "range": "± 23493.56036966741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319877.0215053763,
            "unit": "ns",
            "range": "± 22784.672958973068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311119.3988764045,
            "unit": "ns",
            "range": "± 17188.632514784127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197135.428571428,
            "unit": "ns",
            "range": "± 59493.22443866941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3713268.0714285714,
            "unit": "ns",
            "range": "± 39020.774666962854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21347.9587628866,
            "unit": "ns",
            "range": "± 3418.9462281208503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108458.36597938144,
            "unit": "ns",
            "range": "± 11093.559882529504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110365,
            "unit": "ns",
            "range": "± 9738.295887885108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117219.21276595745,
            "unit": "ns",
            "range": "± 12675.228320882507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6759.010204081633,
            "unit": "ns",
            "range": "± 1078.9431302183257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21448.151515151516,
            "unit": "ns",
            "range": "± 5171.617710360563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599014.7731958763,
            "unit": "ns",
            "range": "± 160309.91072226744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990872.714285714,
            "unit": "ns",
            "range": "± 204301.0816156328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012340.8409090908,
            "unit": "ns",
            "range": "± 117611.49068831849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5951214.96875,
            "unit": "ns",
            "range": "± 460751.53038491466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335195.684782609,
            "unit": "ns",
            "range": "± 194311.27378031958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536191.294117647,
            "unit": "ns",
            "range": "± 168033.18523732672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447292.388888889,
            "unit": "ns",
            "range": "± 81254.97455814287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4012346.195652174,
            "unit": "ns",
            "range": "± 224519.55145064465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7273812.439024391,
            "unit": "ns",
            "range": "± 220290.34570335224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599713.295758928,
            "unit": "ns",
            "range": "± 95445.64377056727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032722.6385416666,
            "unit": "ns",
            "range": "± 17042.611801249128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313644.9909319195,
            "unit": "ns",
            "range": "± 5658.8884070923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2876007.335720486,
            "unit": "ns",
            "range": "± 80250.02924014794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861967.0315987723,
            "unit": "ns",
            "range": "± 2870.383321480119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775191.0581752232,
            "unit": "ns",
            "range": "± 17807.534924032017"
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
          "id": "6eee647dbd01c344f9be474baf83bdb2b3df65bb",
          "message": "Changelog",
          "timestamp": "2023-08-08T17:00:50+09:00",
          "tree_id": "bbca0c04749f4b60ee9725e7c713ec8060c5de1f",
          "url": "https://github.com/greymistcube/libplanet/commit/6eee647dbd01c344f9be474baf83bdb2b3df65bb"
        },
        "date": 1691482790221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9196920.319148935,
            "unit": "ns",
            "range": "± 544255.3264381132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22558425.93,
            "unit": "ns",
            "range": "± 1337768.990501106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56061280.52380952,
            "unit": "ns",
            "range": "± 2037837.9469817406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110672799.875,
            "unit": "ns",
            "range": "± 2173083.8087605326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225408097.2777778,
            "unit": "ns",
            "range": "± 4331421.455730341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76511.30898876404,
            "unit": "ns",
            "range": "± 8703.001571919162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384454.3387096774,
            "unit": "ns",
            "range": "± 59800.426858715415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359965.40206185565,
            "unit": "ns",
            "range": "± 43936.23259069609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341144.7395833333,
            "unit": "ns",
            "range": "± 43230.22848698272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4733860.465116279,
            "unit": "ns",
            "range": "± 377376.3768291762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700535.4166666665,
            "unit": "ns",
            "range": "± 95319.00742377475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17034.717391304348,
            "unit": "ns",
            "range": "± 1740.0026293152232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83550.44791666667,
            "unit": "ns",
            "range": "± 7025.052814740282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94133.625,
            "unit": "ns",
            "range": "± 13520.468966679646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107434.53684210527,
            "unit": "ns",
            "range": "± 18788.299831255626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5514.265957446809,
            "unit": "ns",
            "range": "± 798.4579651142881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20512.827956989247,
            "unit": "ns",
            "range": "± 2886.8176085201653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487333.8854166667,
            "unit": "ns",
            "range": "± 103133.62655576806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949849.826530612,
            "unit": "ns",
            "range": "± 116533.6308634743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244382.611111111,
            "unit": "ns",
            "range": "± 257459.95346155544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6159676.64893617,
            "unit": "ns",
            "range": "± 511069.5574836266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585556.5412371135,
            "unit": "ns",
            "range": "± 307085.3858166228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3828309.112244898,
            "unit": "ns",
            "range": "± 353163.2029488204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4806423.898989899,
            "unit": "ns",
            "range": "± 320310.2881470829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4236484.974226804,
            "unit": "ns",
            "range": "± 361798.61300487584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7411904.3625,
            "unit": "ns",
            "range": "± 387242.12762362836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7116994.078330592,
            "unit": "ns",
            "range": "± 154721.64099329984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2106234.0415039062,
            "unit": "ns",
            "range": "± 39527.78657839872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465191.0105329242,
            "unit": "ns",
            "range": "± 63076.81841878167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865168.7277856693,
            "unit": "ns",
            "range": "± 203375.46749547432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850497.2375837053,
            "unit": "ns",
            "range": "± 12908.31563344765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806876.3352539062,
            "unit": "ns",
            "range": "± 16051.146040643036"
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
          "id": "4aaf6b6fb025f9fb44cb3940fb902e5c512dbd72",
          "message": "Cleanup tests",
          "timestamp": "2023-08-08T17:05:53+09:00",
          "tree_id": "1c88b7c93f4ad3498a0dfb49514301a05f314e63",
          "url": "https://github.com/greymistcube/libplanet/commit/4aaf6b6fb025f9fb44cb3940fb902e5c512dbd72"
        },
        "date": 1691483099414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8172363.1,
            "unit": "ns",
            "range": "± 134903.12994505142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20763840.85714286,
            "unit": "ns",
            "range": "± 366658.2305714488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49553022.21428572,
            "unit": "ns",
            "range": "± 738386.8726106388"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96685530.7,
            "unit": "ns",
            "range": "± 1208381.1357419007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220858735.89473686,
            "unit": "ns",
            "range": "± 9493321.521905307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66434.47938144329,
            "unit": "ns",
            "range": "± 11145.002679620005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339476.9052631579,
            "unit": "ns",
            "range": "± 30243.758509277992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344965.27835051547,
            "unit": "ns",
            "range": "± 33302.966025860675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334461.42307692306,
            "unit": "ns",
            "range": "± 27778.411145760412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4441810.852941177,
            "unit": "ns",
            "range": "± 227937.82064950388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4045002.0176470587,
            "unit": "ns",
            "range": "± 216595.49588365405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22395.333333333332,
            "unit": "ns",
            "range": "± 4829.954415534412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106291.82978723405,
            "unit": "ns",
            "range": "± 15720.18463231084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117199.08510638298,
            "unit": "ns",
            "range": "± 9241.041223289098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110370.81958762887,
            "unit": "ns",
            "range": "± 16291.600758741188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7531.666666666667,
            "unit": "ns",
            "range": "± 912.6173310771916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17437.829545454544,
            "unit": "ns",
            "range": "± 1606.7382839591585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1513049.0808080807,
            "unit": "ns",
            "range": "± 207447.5933544779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2899676.153846154,
            "unit": "ns",
            "range": "± 187605.52321340665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225405.6842105263,
            "unit": "ns",
            "range": "± 363272.73112697626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5514513,
            "unit": "ns",
            "range": "± 214809.67362622256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3609144.2653061226,
            "unit": "ns",
            "range": "± 293920.5326936493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3874787.6379310344,
            "unit": "ns",
            "range": "± 263354.7552068764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4829316.652777778,
            "unit": "ns",
            "range": "± 232370.32148010007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4174112.8958333335,
            "unit": "ns",
            "range": "± 305926.91167509713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7309265.120879121,
            "unit": "ns",
            "range": "± 537169.5390697395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431962.965087891,
            "unit": "ns",
            "range": "± 195311.6139474066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2086453.491015625,
            "unit": "ns",
            "range": "± 45635.726798020725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327867.9494791667,
            "unit": "ns",
            "range": "± 19259.413265247276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2758813.6333333333,
            "unit": "ns",
            "range": "± 31980.67647501636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900586.9307291667,
            "unit": "ns",
            "range": "± 12773.664434873841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731701.6664713542,
            "unit": "ns",
            "range": "± 10487.248809388926"
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
          "id": "044e4de0f3272f313c3108a396d5357848245ed3",
          "message": "Update Libplanet.Store/Trie/ITrie.cs\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-08-09T16:17:00+09:00",
          "tree_id": "28b90b59745b78789e44d0dbf9e180f463bd7f52",
          "url": "https://github.com/greymistcube/libplanet/commit/044e4de0f3272f313c3108a396d5357848245ed3"
        },
        "date": 1691566587508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9268588,
            "unit": "ns",
            "range": "± 729763.408724085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22273303.07731959,
            "unit": "ns",
            "range": "± 1348963.8328896863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54533210.916666664,
            "unit": "ns",
            "range": "± 2125141.193516566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113534437.85714285,
            "unit": "ns",
            "range": "± 3242646.3321835664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241148840.93333334,
            "unit": "ns",
            "range": "± 3269569.7666370957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86344.72340425532,
            "unit": "ns",
            "range": "± 17268.1053903471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429937,
            "unit": "ns",
            "range": "± 106306.57118220328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 365416.6935483871,
            "unit": "ns",
            "range": "± 47196.75902290834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358490.66315789474,
            "unit": "ns",
            "range": "± 48756.53180084727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4744305.075757576,
            "unit": "ns",
            "range": "± 465507.84860035666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4039123.619047619,
            "unit": "ns",
            "range": "± 215433.90069021197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24290.1,
            "unit": "ns",
            "range": "± 3453.1172045110034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115907.91666666667,
            "unit": "ns",
            "range": "± 18524.552452675605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117993.37777777777,
            "unit": "ns",
            "range": "± 10313.919104758414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123715,
            "unit": "ns",
            "range": "± 19368.143861288798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7090.994736842105,
            "unit": "ns",
            "range": "± 770.5147474486353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21524.447368421053,
            "unit": "ns",
            "range": "± 3175.8596737597227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1661109.77,
            "unit": "ns",
            "range": "± 248220.85887947804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076521.3260869565,
            "unit": "ns",
            "range": "± 263095.004348557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2327375.757575758,
            "unit": "ns",
            "range": "± 353117.6133443387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6160711.306451613,
            "unit": "ns",
            "range": "± 573642.3807525195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3722306.724489796,
            "unit": "ns",
            "range": "± 375025.72294003586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3855931.826530612,
            "unit": "ns",
            "range": "± 381708.8154410071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4753272.277777778,
            "unit": "ns",
            "range": "± 418224.8066141217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4410077.040816327,
            "unit": "ns",
            "range": "± 380960.7937009477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7697721.928571428,
            "unit": "ns",
            "range": "± 638215.5641115886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6933751.30078125,
            "unit": "ns",
            "range": "± 115653.29455209851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2150189.034895833,
            "unit": "ns",
            "range": "± 27425.3147616517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1316625.91953125,
            "unit": "ns",
            "range": "± 10399.314824559255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3073583.7425655243,
            "unit": "ns",
            "range": "± 187632.31263259627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 936998.6266927083,
            "unit": "ns",
            "range": "± 17265.458683330424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836446.7217407227,
            "unit": "ns",
            "range": "± 12171.164771238886"
          }
        ]
      }
    ]
  }
}