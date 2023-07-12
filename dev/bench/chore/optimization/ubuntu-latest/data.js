window.BENCHMARK_DATA = {
  "lastUpdate": 1689156079726,
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
          "id": "e26c06789337ed69008ba96da5737c2f5c713a79",
          "message": "Faster hex for netstandard2.1 and up",
          "timestamp": "2023-07-12T18:47:56+09:00",
          "tree_id": "48d3f531a9ed328184da0b1e4a76cc37947d4a5f",
          "url": "https://github.com/greymistcube/libplanet/commit/e26c06789337ed69008ba96da5737c2f5c713a79"
        },
        "date": 1689156072483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286104.76470588235,
            "unit": "ns",
            "range": "± 9228.304854544715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271941.05263157893,
            "unit": "ns",
            "range": "± 7983.042266892547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240282.76470588235,
            "unit": "ns",
            "range": "± 4920.594381390979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4423897.142857143,
            "unit": "ns",
            "range": "± 72252.96754497316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4049925.7333333334,
            "unit": "ns",
            "range": "± 60167.59094570368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18806.323076923076,
            "unit": "ns",
            "range": "± 886.9664964728851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85606.5,
            "unit": "ns",
            "range": "± 3950.048495829258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72508.30769230769,
            "unit": "ns",
            "range": "± 873.2368316227644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91371.70408163265,
            "unit": "ns",
            "range": "± 12659.49468968361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4896.895833333333,
            "unit": "ns",
            "range": "± 564.4566736282854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19516.894736842107,
            "unit": "ns",
            "range": "± 1464.6025128739486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449331.948979592,
            "unit": "ns",
            "range": "± 84961.7476612691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691901.7666666666,
            "unit": "ns",
            "range": "± 80117.08946918031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847892.5529411766,
            "unit": "ns",
            "range": "± 96557.3722824077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4918002.333333333,
            "unit": "ns",
            "range": "± 121041.14045925939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079665.297916667,
            "unit": "ns",
            "range": "± 25583.689743190258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926331.9907924107,
            "unit": "ns",
            "range": "± 6186.564731541368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384187.0032087055,
            "unit": "ns",
            "range": "± 2974.9175935741036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620896.1515625,
            "unit": "ns",
            "range": "± 5570.813997095822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842145.3924479167,
            "unit": "ns",
            "range": "± 2188.16979023311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767115.576953125,
            "unit": "ns",
            "range": "± 1091.0424233315864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398040.0967741935,
            "unit": "ns",
            "range": "± 103331.16186364267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595404.3,
            "unit": "ns",
            "range": "± 125795.18088751682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4314854.066666666,
            "unit": "ns",
            "range": "± 71792.52140565167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930063.0212765955,
            "unit": "ns",
            "range": "± 151901.68942508567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6732835.285714285,
            "unit": "ns",
            "range": "± 181432.06460287966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933744.076923077,
            "unit": "ns",
            "range": "± 59229.651770969045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21695889.066666666,
            "unit": "ns",
            "range": "± 249493.68870044066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54027259.76470588,
            "unit": "ns",
            "range": "± 1076934.9170231067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108482180.8,
            "unit": "ns",
            "range": "± 1873239.3180180918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213050217.4,
            "unit": "ns",
            "range": "± 1858628.7043512866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48795.85393258427,
            "unit": "ns",
            "range": "± 2711.1753302956404"
          }
        ]
      }
    ]
  }
}