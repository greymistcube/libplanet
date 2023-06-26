window.BENCHMARK_DATA = {
  "lastUpdate": 1687756916360,
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
          "id": "9463d85e43c39306971b4f49db1d9287e70e293b",
          "message": "Removed unused Signer private property",
          "timestamp": "2023-06-26T11:36:57+09:00",
          "tree_id": "da7b9469c295569b1549280bbc10673b1fa97f46",
          "url": "https://github.com/greymistcube/libplanet/commit/9463d85e43c39306971b4f49db1d9287e70e293b"
        },
        "date": 1687756901534,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461795.710144928,
            "unit": "ns",
            "range": "± 392801.68521083705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20819181.507462688,
            "unit": "ns",
            "range": "± 975566.3797922162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52853808.52941176,
            "unit": "ns",
            "range": "± 1656088.7379843798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107587139.16666667,
            "unit": "ns",
            "range": "± 3175585.1059790333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219932380.6276596,
            "unit": "ns",
            "range": "± 8413512.206705438"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74750.27777777778,
            "unit": "ns",
            "range": "± 14550.845577018616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338417,
            "unit": "ns",
            "range": "± 38316.63792258817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325151.0206185567,
            "unit": "ns",
            "range": "± 34338.61994016946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325718.92553191487,
            "unit": "ns",
            "range": "± 33067.36827393869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4365396.828358209,
            "unit": "ns",
            "range": "± 205538.39247526185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3833167.0454545454,
            "unit": "ns",
            "range": "± 93239.43305772728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17832.68817204301,
            "unit": "ns",
            "range": "± 2435.8680622980787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102438.82105263158,
            "unit": "ns",
            "range": "± 20316.086875046723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121568.875,
            "unit": "ns",
            "range": "± 20323.604709924446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125572.82105263158,
            "unit": "ns",
            "range": "± 22073.418501445976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7703.566666666667,
            "unit": "ns",
            "range": "± 1504.6401790924385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20985.372340425532,
            "unit": "ns",
            "range": "± 6145.212391640058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689737.2340425532,
            "unit": "ns",
            "range": "± 205627.76656838355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3193929.963917526,
            "unit": "ns",
            "range": "± 293121.27407625096"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495295.0736842104,
            "unit": "ns",
            "range": "± 211216.44738389392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6633970.333333333,
            "unit": "ns",
            "range": "± 406426.4573767356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3487931.5102040814,
            "unit": "ns",
            "range": "± 329900.0910373916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3544062.7258064514,
            "unit": "ns",
            "range": "± 161222.0322204265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4601288.225806451,
            "unit": "ns",
            "range": "± 309363.0915545303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4557273.435483871,
            "unit": "ns",
            "range": "± 426027.32120351586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8085995.904255319,
            "unit": "ns",
            "range": "± 577683.9203985134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7889669.826690051,
            "unit": "ns",
            "range": "± 496611.8155221719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2485556.1306340145,
            "unit": "ns",
            "range": "± 98215.35755517111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380983.6521245218,
            "unit": "ns",
            "range": "± 92319.93360805203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614336.5583496094,
            "unit": "ns",
            "range": "± 120822.51563565608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865504.0510066106,
            "unit": "ns",
            "range": "± 6964.1542679424665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797290.8164911685,
            "unit": "ns",
            "range": "± 19932.753011273653"
          }
        ]
      }
    ]
  }
}