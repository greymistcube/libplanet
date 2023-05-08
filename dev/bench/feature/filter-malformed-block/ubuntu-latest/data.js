window.BENCHMARK_DATA = {
  "lastUpdate": 1683536962953,
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
          "id": "b91b19a69521ad081afb31944c288d98ebbce4f8",
          "message": "Added test",
          "timestamp": "2023-05-08T17:26:06+09:00",
          "tree_id": "3084fc63159fadeeff50ba744a90f6f4c5c3efde",
          "url": "https://github.com/greymistcube/libplanet/commit/b91b19a69521ad081afb31944c288d98ebbce4f8"
        },
        "date": 1683536954210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367730.8541666667,
            "unit": "ns",
            "range": "± 46018.53999170315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340955.8144329897,
            "unit": "ns",
            "range": "± 46657.44055085826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307407.8494623656,
            "unit": "ns",
            "range": "± 40033.81335412284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5056863.367346939,
            "unit": "ns",
            "range": "± 468897.371995335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4636603.715789474,
            "unit": "ns",
            "range": "± 438031.828584521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33511.27272727273,
            "unit": "ns",
            "range": "± 9595.203965479139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123639.86458333333,
            "unit": "ns",
            "range": "± 25652.133476316005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98216.20408163265,
            "unit": "ns",
            "range": "± 17391.424051982045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141321.25773195876,
            "unit": "ns",
            "range": "± 31414.820822967176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5721.79347826087,
            "unit": "ns",
            "range": "± 1103.280866853854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32798.181818181816,
            "unit": "ns",
            "range": "± 11887.929692539745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3797107.53125,
            "unit": "ns",
            "range": "± 365515.55748935894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946247.505263158,
            "unit": "ns",
            "range": "± 384664.8287678751"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4837608.241758241,
            "unit": "ns",
            "range": "± 500181.8714707535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4820552.958762887,
            "unit": "ns",
            "range": "± 475867.6553760535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8895707.95,
            "unit": "ns",
            "range": "± 1012550.1194175391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7254700.244081439,
            "unit": "ns",
            "range": "± 227601.75399277333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2266949.223704268,
            "unit": "ns",
            "range": "± 81129.29501039819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1650833.2415364583,
            "unit": "ns",
            "range": "± 57709.35059861716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3032580.4895148026,
            "unit": "ns",
            "range": "± 65391.03144964866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025951.7360913826,
            "unit": "ns",
            "range": "± 32213.6132761578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935321.3809244792,
            "unit": "ns",
            "range": "± 34943.27382571917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73272.45918367348,
            "unit": "ns",
            "range": "± 15110.101446211793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9433825.295918368,
            "unit": "ns",
            "range": "± 685988.7057585818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24203978.12,
            "unit": "ns",
            "range": "± 1922582.372731221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62242648.4040404,
            "unit": "ns",
            "range": "± 4706427.442675757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124809735.11,
            "unit": "ns",
            "range": "± 8631996.750128234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254841019.82,
            "unit": "ns",
            "range": "± 15117534.0697055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737155.1030927836,
            "unit": "ns",
            "range": "± 245058.78388445242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3542949.06185567,
            "unit": "ns",
            "range": "± 340529.77163503435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2789661.852631579,
            "unit": "ns",
            "range": "± 302374.47454580286"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7214002.105263158,
            "unit": "ns",
            "range": "± 585640.5713728011"
          }
        ]
      }
    ]
  }
}