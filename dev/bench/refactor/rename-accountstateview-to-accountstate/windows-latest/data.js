window.BENCHMARK_DATA = {
  "lastUpdate": 1687854177795,
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
          "id": "7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-26T21:18:27+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/7054ab6c4ed6fd354fb72afeeb8fbe86bd283a39"
        },
        "date": 1687782936625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1441861.224489796,
            "unit": "ns",
            "range": "± 99717.96789011825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648751.785714286,
            "unit": "ns",
            "range": "± 114021.73395864082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2468394.736842105,
            "unit": "ns",
            "range": "± 53539.78244346504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5610339.7727272725,
            "unit": "ns",
            "range": "± 308223.0255146734"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48159.278350515466,
            "unit": "ns",
            "range": "± 3645.2332594038357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6921907.142857143,
            "unit": "ns",
            "range": "± 105576.96036749477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20039186.666666668,
            "unit": "ns",
            "range": "± 317930.62106302974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49502126.666666664,
            "unit": "ns",
            "range": "± 829493.3380139492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100311704.76190476,
            "unit": "ns",
            "range": "± 2352584.207308251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200853900,
            "unit": "ns",
            "range": "± 3246434.9400534737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4886494.029017857,
            "unit": "ns",
            "range": "± 27723.778475085546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529495.5078125,
            "unit": "ns",
            "range": "± 7502.192038498884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185245.982142857,
            "unit": "ns",
            "range": "± 7226.84783566197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2655277.511160714,
            "unit": "ns",
            "range": "± 10567.633363828623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841367.3758370535,
            "unit": "ns",
            "range": "± 3147.1693619625457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772610.78125,
            "unit": "ns",
            "range": "± 4790.449104752096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232366.037735849,
            "unit": "ns",
            "range": "± 134219.470018606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462217.6470588236,
            "unit": "ns",
            "range": "± 109323.93752288663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4206185.9375,
            "unit": "ns",
            "range": "± 190466.32403855002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4299842,
            "unit": "ns",
            "range": "± 171332.8757782609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6692981.578947368,
            "unit": "ns",
            "range": "± 230549.9182099806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283901.69491525425,
            "unit": "ns",
            "range": "± 11822.530966634964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263236.84210526315,
            "unit": "ns",
            "range": "± 5717.440232045941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247412.12121212122,
            "unit": "ns",
            "range": "± 17946.134099800292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4121321.4285714286,
            "unit": "ns",
            "range": "± 44973.34986191487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657200,
            "unit": "ns",
            "range": "± 51426.869019442136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24588.659793814433,
            "unit": "ns",
            "range": "± 3029.0219917993536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104545.91836734694,
            "unit": "ns",
            "range": "± 12402.071396387882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96077.77777777778,
            "unit": "ns",
            "range": "± 14363.598801189832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113055.20833333333,
            "unit": "ns",
            "range": "± 16614.127595080463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6591.578947368421,
            "unit": "ns",
            "range": "± 1131.4332050211415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22035.106382978724,
            "unit": "ns",
            "range": "± 2400.300494038038"
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
          "id": "efa8719f904bb6fb3a5e5fa049ae08bd63ed3936",
          "message": "Consistent API across IBlockChainStates, IBlockStates, and IAccountState",
          "timestamp": "2023-06-27T17:01:08+09:00",
          "tree_id": "854e42435068d707308c2e422a6d234a2bb48784",
          "url": "https://github.com/greymistcube/libplanet/commit/efa8719f904bb6fb3a5e5fa049ae08bd63ed3936"
        },
        "date": 1687854153122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656120.430107527,
            "unit": "ns",
            "range": "± 122904.76302294408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112594.897959184,
            "unit": "ns",
            "range": "± 258718.345888872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2606543.010752688,
            "unit": "ns",
            "range": "± 171402.4836192196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6606160.416666667,
            "unit": "ns",
            "range": "± 388260.21889264084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54454.166666666664,
            "unit": "ns",
            "range": "± 3611.353927958662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9252911.594202898,
            "unit": "ns",
            "range": "± 444159.5257059814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24985903.57142857,
            "unit": "ns",
            "range": "± 696814.0426159425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62535720.37037037,
            "unit": "ns",
            "range": "± 2462179.0642988496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126699626.3888889,
            "unit": "ns",
            "range": "± 6261302.9131884575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250820908.6956522,
            "unit": "ns",
            "range": "± 9619963.5966931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6006964.797794118,
            "unit": "ns",
            "range": "± 120433.00451545566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950895.921875,
            "unit": "ns",
            "range": "± 50638.16559514507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1440243.1985294118,
            "unit": "ns",
            "range": "± 27648.172647392606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200339.765625,
            "unit": "ns",
            "range": "± 53821.046859985974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023536.0894097222,
            "unit": "ns",
            "range": "± 21846.84946788082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958215.9869025735,
            "unit": "ns",
            "range": "± 19186.69765033584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4004250,
            "unit": "ns",
            "range": "± 167797.44612039928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4133530.2083333335,
            "unit": "ns",
            "range": "± 264962.0291047843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4976642.307692308,
            "unit": "ns",
            "range": "± 204985.5349714006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4995842.708333333,
            "unit": "ns",
            "range": "± 306946.09632887517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8403174.666666666,
            "unit": "ns",
            "range": "± 419609.7501937458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308917.4603174603,
            "unit": "ns",
            "range": "± 13307.074757709557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302251.28205128206,
            "unit": "ns",
            "range": "± 10148.810451291733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276474.7252747253,
            "unit": "ns",
            "range": "± 17729.65245887737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5022797.872340426,
            "unit": "ns",
            "range": "± 194521.9228612434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4320536.79245283,
            "unit": "ns",
            "range": "± 179806.11891459415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23693.877551020407,
            "unit": "ns",
            "range": "± 2269.920582040085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103276.3440860215,
            "unit": "ns",
            "range": "± 7425.768849806239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90051.0752688172,
            "unit": "ns",
            "range": "± 7574.076132837072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116796.84210526316,
            "unit": "ns",
            "range": "± 17817.517394177714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6295.833333333333,
            "unit": "ns",
            "range": "± 1046.891807275399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20897.802197802197,
            "unit": "ns",
            "range": "± 2010.1397420731187"
          }
        ]
      }
    ]
  }
}