window.BENCHMARK_DATA = {
  "lastUpdate": 1700794015453,
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
          "id": "b491a3c89394f8d4788c76c72abf003669ffa8b5",
          "message": "Prepare 3.9.0",
          "timestamp": "2023-11-24T11:35:02+09:00",
          "tree_id": "523cbc8c13e1d1c7c7efc4a98ee9d3ab351bdcda",
          "url": "https://github.com/greymistcube/libplanet/commit/b491a3c89394f8d4788c76c72abf003669ffa8b5"
        },
        "date": 1700793997435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 922559,
            "unit": "ns",
            "range": "± 80918.83337610285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1648553.1746031747,
            "unit": "ns",
            "range": "± 59078.35684769729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1259571.5789473683,
            "unit": "ns",
            "range": "± 100744.37597222783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4939672.972972973,
            "unit": "ns",
            "range": "± 247832.63204450873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33644.117647058825,
            "unit": "ns",
            "range": "± 1605.622802207142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5096806.666666667,
            "unit": "ns",
            "range": "± 51978.29858517422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12886985.714285715,
            "unit": "ns",
            "range": "± 126273.68845331317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31566683.333333332,
            "unit": "ns",
            "range": "± 117969.48629611684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64404326.666666664,
            "unit": "ns",
            "range": "± 446102.57543475786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128513535.71428572,
            "unit": "ns",
            "range": "± 697938.9719928051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3224178.2451923075,
            "unit": "ns",
            "range": "± 2689.4092461576124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046903.125,
            "unit": "ns",
            "range": "± 3594.08993627022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 716776.708984375,
            "unit": "ns",
            "range": "± 1154.8716262005462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1875846.0787259615,
            "unit": "ns",
            "range": "± 1398.2592693083648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 587626.640625,
            "unit": "ns",
            "range": "± 664.9502586257456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555296.015625,
            "unit": "ns",
            "range": "± 1300.726702750486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2061588.6363636365,
            "unit": "ns",
            "range": "± 76617.17949289238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236220.754716981,
            "unit": "ns",
            "range": "± 93038.64242364478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2721496.5517241377,
            "unit": "ns",
            "range": "± 73005.0755709033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2558129.411764706,
            "unit": "ns",
            "range": "± 137612.21639389556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5935412.6760563385,
            "unit": "ns",
            "range": "± 290211.4046836388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164725.39682539683,
            "unit": "ns",
            "range": "± 6652.890913075314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155471.23287671234,
            "unit": "ns",
            "range": "± 7570.822637160942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142962.5,
            "unit": "ns",
            "range": "± 3534.8959150779506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2702857.1428571427,
            "unit": "ns",
            "range": "± 34180.307292261234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2441100,
            "unit": "ns",
            "range": "± 36236.29714484126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8968.539325842698,
            "unit": "ns",
            "range": "± 799.800473075228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48576.543209876545,
            "unit": "ns",
            "range": "± 2556.7690355670707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43069.767441860466,
            "unit": "ns",
            "range": "± 1572.3102328861623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 46591.57894736842,
            "unit": "ns",
            "range": "± 7510.541006066566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2109.375,
            "unit": "ns",
            "range": "± 317.5823556679101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8470.786516853932,
            "unit": "ns",
            "range": "± 847.6172816665404"
          }
        ]
      }
    ]
  }
}