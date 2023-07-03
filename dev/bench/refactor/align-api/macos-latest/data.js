window.BENCHMARK_DATA = {
  "lastUpdate": 1688376857654,
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
          "id": "4eb356f93cfaee26859c79aa1416e4a1a8e498cb",
          "message": "Align TxResult nullability with TxSuccess",
          "timestamp": "2023-07-03T18:18:49+09:00",
          "tree_id": "e5e2c5e6b39c0cf7ee667f8c3115cbc0aac4ef71",
          "url": "https://github.com/greymistcube/libplanet/commit/4eb356f93cfaee26859c79aa1416e4a1a8e498cb"
        },
        "date": 1688376844592,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9437165.413978495,
            "unit": "ns",
            "range": "± 2054724.998262153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19932205.64285714,
            "unit": "ns",
            "range": "± 343590.8971825487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52058761.51724138,
            "unit": "ns",
            "range": "± 1463408.7472856364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98629935.66666667,
            "unit": "ns",
            "range": "± 1059798.8552860036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204737378.76923078,
            "unit": "ns",
            "range": "± 908165.9509674938"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57760.574468085106,
            "unit": "ns",
            "range": "± 7169.765262859198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319336.09375,
            "unit": "ns",
            "range": "± 24285.995982124143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305313.77659574465,
            "unit": "ns",
            "range": "± 22048.527002785577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290722.39784946234,
            "unit": "ns",
            "range": "± 19447.347038885917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4151540.125,
            "unit": "ns",
            "range": "± 101534.92263312229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3795529.652173913,
            "unit": "ns",
            "range": "± 93385.16296237793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17331.380434782608,
            "unit": "ns",
            "range": "± 1791.1965050247827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83307.76767676767,
            "unit": "ns",
            "range": "± 7788.588522971865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86948.21428571429,
            "unit": "ns",
            "range": "± 12489.042012776928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96809.25,
            "unit": "ns",
            "range": "± 12895.44913525698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5546.510638297872,
            "unit": "ns",
            "range": "± 730.7769285085897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15725.521978021978,
            "unit": "ns",
            "range": "± 1939.1463240762068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568780.7659574468,
            "unit": "ns",
            "range": "± 189309.6129807831"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877033.214285714,
            "unit": "ns",
            "range": "± 139259.53940679968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2037986.7835051545,
            "unit": "ns",
            "range": "± 207309.4618795688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5745196.960784313,
            "unit": "ns",
            "range": "± 233783.47853567076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326935.6458333335,
            "unit": "ns",
            "range": "± 130783.5312967438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3531123.7578947367,
            "unit": "ns",
            "range": "± 243688.03378647333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4587410.06185567,
            "unit": "ns",
            "range": "± 306577.94584024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4021888.03125,
            "unit": "ns",
            "range": "± 293615.29853174073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7270884.050847458,
            "unit": "ns",
            "range": "± 299627.2893464205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6654722.25,
            "unit": "ns",
            "range": "± 108557.65708435635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998019.956752232,
            "unit": "ns",
            "range": "± 25769.73136996159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285296.7239118305,
            "unit": "ns",
            "range": "± 10146.215645200049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2503636.4365985575,
            "unit": "ns",
            "range": "± 23837.518935730277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 792325.4735026042,
            "unit": "ns",
            "range": "± 7278.335715132423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737671.0627604167,
            "unit": "ns",
            "range": "± 3130.3923489305744"
          }
        ]
      }
    ]
  }
}