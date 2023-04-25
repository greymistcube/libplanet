window.BENCHMARK_DATA = {
  "lastUpdate": 1682414371607,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414364711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8053693.275862069,
            "unit": "ns",
            "range": "± 230870.77394645568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21635199,
            "unit": "ns",
            "range": "± 212917.0304296958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54863568.06666667,
            "unit": "ns",
            "range": "± 360529.69920332235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110935843.8,
            "unit": "ns",
            "range": "± 584036.0544592383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218167532.53333333,
            "unit": "ns",
            "range": "± 1988179.7161693934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49593.38461538462,
            "unit": "ns",
            "range": "± 3045.085186800493"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483414.8333333333,
            "unit": "ns",
            "range": "± 112140.54119594437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2678480.76,
            "unit": "ns",
            "range": "± 68910.18863303162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359497.341772152,
            "unit": "ns",
            "range": "± 122365.99803226785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6040257.33,
            "unit": "ns",
            "range": "± 409686.7210327752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5910127.713020833,
            "unit": "ns",
            "range": "± 32341.508720696045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1858016.9328125,
            "unit": "ns",
            "range": "± 4152.373166809492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1377028.6458333333,
            "unit": "ns",
            "range": "± 3409.92101574527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609036.15625,
            "unit": "ns",
            "range": "± 2624.9493730299573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826703.1060546875,
            "unit": "ns",
            "range": "± 784.1928533713799"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762000.4252604167,
            "unit": "ns",
            "range": "± 702.5207656531394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297485.3611111111,
            "unit": "ns",
            "range": "± 9776.581822038614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280174.17647058825,
            "unit": "ns",
            "range": "± 9007.35250670449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237683.93333333332,
            "unit": "ns",
            "range": "± 4281.489735171737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4379507.428571428,
            "unit": "ns",
            "range": "± 52035.99065693236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3967810.8,
            "unit": "ns",
            "range": "± 44341.65535475643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20135.308510638297,
            "unit": "ns",
            "range": "± 1289.3927471821494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93282.56521739131,
            "unit": "ns",
            "range": "± 6179.027039069024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86829.65625,
            "unit": "ns",
            "range": "± 5452.6847386896925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102371.0625,
            "unit": "ns",
            "range": "± 9774.568072635177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6534.4375,
            "unit": "ns",
            "range": "± 687.2060567789579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19218.483870967742,
            "unit": "ns",
            "range": "± 1861.7454562207922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3432802.4,
            "unit": "ns",
            "range": "± 77354.4726127714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673896.730769231,
            "unit": "ns",
            "range": "± 97136.3698133949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267881.555555556,
            "unit": "ns",
            "range": "± 84132.50246326937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4597486.6,
            "unit": "ns",
            "range": "± 137081.01493909006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7060228.181818182,
            "unit": "ns",
            "range": "± 168347.3617530238"
          }
        ]
      }
    ]
  }
}