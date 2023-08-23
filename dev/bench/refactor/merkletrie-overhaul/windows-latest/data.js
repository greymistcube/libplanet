window.BENCHMARK_DATA = {
  "lastUpdate": 1692756709959,
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
          "id": "72d80bf51c0bcd6f41f280d72148bd74355e6f3e",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T01:00:48+09:00",
          "tree_id": "14da1eae20fc142705db54b95adc7312a8ddc449",
          "url": "https://github.com/greymistcube/libplanet/commit/72d80bf51c0bcd6f41f280d72148bd74355e6f3e"
        },
        "date": 1692721265142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642883.3333333333,
            "unit": "ns",
            "range": "± 134823.5935465733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3238001.0416666665,
            "unit": "ns",
            "range": "± 227679.9138193755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2113421.052631579,
            "unit": "ns",
            "range": "± 177719.05086802982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5720557.731958763,
            "unit": "ns",
            "range": "± 531503.8755806983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58756.98924731183,
            "unit": "ns",
            "range": "± 4921.434879343853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9756068.75,
            "unit": "ns",
            "range": "± 110219.13154408963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26941234.408602152,
            "unit": "ns",
            "range": "± 1734980.4256817512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63018056.25,
            "unit": "ns",
            "range": "± 805669.1413301533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132487644.26229508,
            "unit": "ns",
            "range": "± 5902072.149014689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258885473.68421054,
            "unit": "ns",
            "range": "± 8824537.54303748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5613016.3671875,
            "unit": "ns",
            "range": "± 125038.70156413068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1809767.1530330882,
            "unit": "ns",
            "range": "± 34925.51437006219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318596.799045139,
            "unit": "ns",
            "range": "± 27686.072608798862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3261591.7724609375,
            "unit": "ns",
            "range": "± 63766.062765306146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1072919.6318655303,
            "unit": "ns",
            "range": "± 33346.107658403926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 956958.4920247396,
            "unit": "ns",
            "range": "± 24667.541592446254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4030957.5757575757,
            "unit": "ns",
            "range": "± 116817.47255414916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4293131.578947368,
            "unit": "ns",
            "range": "± 94351.60631401613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5020650,
            "unit": "ns",
            "range": "± 50795.35590797826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4575926.9662921345,
            "unit": "ns",
            "range": "± 244847.97266692066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7316082.75862069,
            "unit": "ns",
            "range": "± 319833.3645838539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313194.5945945946,
            "unit": "ns",
            "range": "± 9752.861288017137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296800,
            "unit": "ns",
            "range": "± 12896.038019879186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283840.206185567,
            "unit": "ns",
            "range": "± 16449.85853405366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4961300,
            "unit": "ns",
            "range": "± 119311.73733822949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4615641.176470588,
            "unit": "ns",
            "range": "± 92854.77275579005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27045.054945054944,
            "unit": "ns",
            "range": "± 2570.182169776373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109540.625,
            "unit": "ns",
            "range": "± 9070.989943365144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97873.73737373737,
            "unit": "ns",
            "range": "± 10310.382976107003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110333.33333333333,
            "unit": "ns",
            "range": "± 19291.53982376549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6953.763440860215,
            "unit": "ns",
            "range": "± 870.2272491542886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25287.5,
            "unit": "ns",
            "range": "± 2768.706709296827"
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
          "id": "eb95d966fb4b2ecaee383c85106a926bb89ad433",
          "message": "Remove clutter",
          "timestamp": "2023-08-23T02:44:52+09:00",
          "tree_id": "1c2221d703d8ff464fdfc85ea909a5815ba6f6c9",
          "url": "https://github.com/greymistcube/libplanet/commit/eb95d966fb4b2ecaee383c85106a926bb89ad433"
        },
        "date": 1692756679931,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324191.836734694,
            "unit": "ns",
            "range": "± 112477.94003505654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2355103.3333333335,
            "unit": "ns",
            "range": "± 53596.16869563136"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1683227,
            "unit": "ns",
            "range": "± 148009.03798161255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4236449.0566037735,
            "unit": "ns",
            "range": "± 173223.8154512176"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43800,
            "unit": "ns",
            "range": "± 2051.519533020877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7022273.333333333,
            "unit": "ns",
            "range": "± 26593.029878057107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17882453.333333332,
            "unit": "ns",
            "range": "± 81594.03748057177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45831173.333333336,
            "unit": "ns",
            "range": "± 279786.31506068713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91002133.33333333,
            "unit": "ns",
            "range": "± 345210.3037418261"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184303228.57142857,
            "unit": "ns",
            "range": "± 485149.23346972704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4327173.467548077,
            "unit": "ns",
            "range": "± 3466.467474306615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1386227.3307291667,
            "unit": "ns",
            "range": "± 1287.4439464682473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 994348.828125,
            "unit": "ns",
            "range": "± 730.9215271898458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556388.18359375,
            "unit": "ns",
            "range": "± 4376.755580460711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804898.0794270834,
            "unit": "ns",
            "range": "± 836.5484046545879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740212.1442522322,
            "unit": "ns",
            "range": "± 1202.2610599454126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3121292.8571428573,
            "unit": "ns",
            "range": "± 46200.07433037167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3127132,
            "unit": "ns",
            "range": "± 67608.9966892967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968900,
            "unit": "ns",
            "range": "± 62243.27846672052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3396255.263157895,
            "unit": "ns",
            "range": "± 115728.6030596805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5476862.162162162,
            "unit": "ns",
            "range": "± 77395.72322146084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247334.88372093023,
            "unit": "ns",
            "range": "± 8395.517049817498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232748.97959183675,
            "unit": "ns",
            "range": "± 7070.570534764137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206847.36842105264,
            "unit": "ns",
            "range": "± 4207.1854435863825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3785821.4285714286,
            "unit": "ns",
            "range": "± 17038.606776351193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3414114.285714286,
            "unit": "ns",
            "range": "± 27605.346671164356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18905.555555555555,
            "unit": "ns",
            "range": "± 1167.5732165393417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83138.46153846153,
            "unit": "ns",
            "range": "± 4173.23664508785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64028,
            "unit": "ns",
            "range": "± 1650.1313079065355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78541.83673469388,
            "unit": "ns",
            "range": "± 13475.0603806339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4394.845360824742,
            "unit": "ns",
            "range": "± 505.46412954263684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18429.896907216495,
            "unit": "ns",
            "range": "± 1474.7997709049082"
          }
        ]
      }
    ]
  }
}