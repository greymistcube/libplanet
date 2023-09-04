window.BENCHMARK_DATA = {
  "lastUpdate": 1693810329049,
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
          "id": "44a6c3a355196c9a670cb3dd891521a002634ea0",
          "message": "Account overhaul",
          "timestamp": "2023-09-04T15:31:54+09:00",
          "tree_id": "3fabf264f5b3fd83d5b10677ac599d2f808b7024",
          "url": "https://github.com/greymistcube/libplanet/commit/44a6c3a355196c9a670cb3dd891521a002634ea0"
        },
        "date": 1693810304612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1536377.6595744682,
            "unit": "ns",
            "range": "± 125304.66712403677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944186.7647058824,
            "unit": "ns",
            "range": "± 133159.9441188485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980516.8421052631,
            "unit": "ns",
            "range": "± 147032.31491144892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5465383.695652174,
            "unit": "ns",
            "range": "± 391479.05934682034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57542.045454545456,
            "unit": "ns",
            "range": "± 4558.703223326773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9580550,
            "unit": "ns",
            "range": "± 404004.2684951041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25046828.57142857,
            "unit": "ns",
            "range": "± 262065.99999169743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65199425.71428572,
            "unit": "ns",
            "range": "± 2078760.2603960084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132165529.0909091,
            "unit": "ns",
            "range": "± 5590753.169087022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249665041.3043478,
            "unit": "ns",
            "range": "± 6257054.069674485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5685009.580592105,
            "unit": "ns",
            "range": "± 118302.91930148429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1794912.4549278845,
            "unit": "ns",
            "range": "± 17549.636125578774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299673.130580357,
            "unit": "ns",
            "range": "± 30524.897472423196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3302493.1510416665,
            "unit": "ns",
            "range": "± 97964.428855752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1030720.935639881,
            "unit": "ns",
            "range": "± 23534.89875901505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939678.8434709822,
            "unit": "ns",
            "range": "± 14551.905611930486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3931713.6363636362,
            "unit": "ns",
            "range": "± 185011.5745953905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4069233.3333333335,
            "unit": "ns",
            "range": "± 141871.92766593792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4958328.888888889,
            "unit": "ns",
            "range": "± 185684.79966944747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4465914.583333333,
            "unit": "ns",
            "range": "± 169219.3842193245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7025727.2727272725,
            "unit": "ns",
            "range": "± 167900.58050842152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298104.1666666667,
            "unit": "ns",
            "range": "± 7257.588482389322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289630.4347826087,
            "unit": "ns",
            "range": "± 9054.96474169999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 261054.7619047619,
            "unit": "ns",
            "range": "± 13931.769231455539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4870560,
            "unit": "ns",
            "range": "± 88544.28109305374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4511936.842105263,
            "unit": "ns",
            "range": "± 94572.91255678704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23951.063829787236,
            "unit": "ns",
            "range": "± 2101.70154725437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100912.08791208791,
            "unit": "ns",
            "range": "± 5647.729832317783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88400,
            "unit": "ns",
            "range": "± 7213.517776347226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99471.57894736843,
            "unit": "ns",
            "range": "± 15310.083335361773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6117.021276595745,
            "unit": "ns",
            "range": "± 1040.2272598959376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23302.083333333332,
            "unit": "ns",
            "range": "± 2233.7591241137447"
          }
        ]
      }
    ]
  }
}