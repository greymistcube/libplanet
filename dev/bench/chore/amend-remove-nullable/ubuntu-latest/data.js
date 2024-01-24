window.BENCHMARK_DATA = {
  "lastUpdate": 1706063797599,
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
          "id": "b1b89e1352beda6d98cf3364169c503b376bacf3",
          "message": "Better explanation for block query arguments",
          "timestamp": "2024-01-24T11:25:25+09:00",
          "tree_id": "e199c212de2f35bc7831f9b023ddda2fc04c0d0a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1b89e1352beda6d98cf3364169c503b376bacf3"
        },
        "date": 1706063790262,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3678942.5530133927,
            "unit": "ns",
            "range": "± 36678.99695696912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205099.6560872395,
            "unit": "ns",
            "range": "± 1894.6114368181163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765381.514078776,
            "unit": "ns",
            "range": "± 1835.3501986584704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955293.8359375,
            "unit": "ns",
            "range": "± 3619.7728010356673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617953.5465494791,
            "unit": "ns",
            "range": "± 3782.0975956891716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566833.999860491,
            "unit": "ns",
            "range": "± 816.9966055656016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2463524.533333333,
            "unit": "ns",
            "range": "± 38935.558892440036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2482958.953846154,
            "unit": "ns",
            "range": "± 114634.53604191326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3114800.5,
            "unit": "ns",
            "range": "± 78113.52612437448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3116997.1627906975,
            "unit": "ns",
            "range": "± 114958.36397768217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13952063.414893618,
            "unit": "ns",
            "range": "± 1016732.7390950532"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41229.134020618556,
            "unit": "ns",
            "range": "± 6019.200519014248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204872.625,
            "unit": "ns",
            "range": "± 3833.1885226270833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194428.9054054054,
            "unit": "ns",
            "range": "± 9696.60479793663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173199.10344827586,
            "unit": "ns",
            "range": "± 5027.942708680499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3166973.714285714,
            "unit": "ns",
            "range": "± 42859.584471905415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2779297.6428571427,
            "unit": "ns",
            "range": "± 39517.5631987896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13084.904255319148,
            "unit": "ns",
            "range": "± 1119.0608420250173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60952.20430107527,
            "unit": "ns",
            "range": "± 5008.492775448561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65297.13265306123,
            "unit": "ns",
            "range": "± 14077.865809865225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87786.13541666667,
            "unit": "ns",
            "range": "± 12395.034650697668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3208.3684210526317,
            "unit": "ns",
            "range": "± 489.33598196686944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13315.714285714286,
            "unit": "ns",
            "range": "± 2720.285157884405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5628117.923076923,
            "unit": "ns",
            "range": "± 21198.18098902804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14160347.076923076,
            "unit": "ns",
            "range": "± 79048.45302667381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36925036.538461536,
            "unit": "ns",
            "range": "± 257100.4875376602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74347239.42307693,
            "unit": "ns",
            "range": "± 554078.3122879926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147859761.6153846,
            "unit": "ns",
            "range": "± 794987.8948673304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002523.46875,
            "unit": "ns",
            "range": "± 103311.85978726875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1898782.9363636363,
            "unit": "ns",
            "range": "± 80394.0556743409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1574474.7527472528,
            "unit": "ns",
            "range": "± 116849.71966377187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12718945.945054945,
            "unit": "ns",
            "range": "± 921987.5041015875"
          }
        ]
      }
    ]
  }
}