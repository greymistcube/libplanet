window.BENCHMARK_DATA = {
  "lastUpdate": 1684481548098,
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
          "id": "8962d75b326cf21b3b6ae9490a38351e2f28374f",
          "message": "Prepare 1.3.1",
          "timestamp": "2023-05-19T16:19:25+09:00",
          "tree_id": "c546d985806a3d5acd8e4c9d43c70e1c7aa4249d",
          "url": "https://github.com/greymistcube/libplanet/commit/8962d75b326cf21b3b6ae9490a38351e2f28374f"
        },
        "date": 1684481541016,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3545359.5,
            "unit": "ns",
            "range": "± 72450.40785680676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3707398.3684210526,
            "unit": "ns",
            "range": "± 82054.52716890325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4525814.176470588,
            "unit": "ns",
            "range": "± 91923.40725995426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4699898.964285715,
            "unit": "ns",
            "range": "± 134506.13953231863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7054276.25,
            "unit": "ns",
            "range": "± 200562.2994427168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281063.8918918919,
            "unit": "ns",
            "range": "± 6913.461296564775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279757.14705882355,
            "unit": "ns",
            "range": "± 7064.346181899523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243241.5,
            "unit": "ns",
            "range": "± 4736.258030696104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377914.4,
            "unit": "ns",
            "range": "± 34215.379949874674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085407.2666666666,
            "unit": "ns",
            "range": "± 58717.05343602933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19843.56842105263,
            "unit": "ns",
            "range": "± 1433.2254551797284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89311.05376344085,
            "unit": "ns",
            "range": "± 5132.432928818183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77645.32203389831,
            "unit": "ns",
            "range": "± 3308.2559028352193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98437.84375,
            "unit": "ns",
            "range": "± 13093.801722332211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5909.381443298969,
            "unit": "ns",
            "range": "± 697.890220045671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17954.57608695652,
            "unit": "ns",
            "range": "± 1473.5208432410577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5901631.862165178,
            "unit": "ns",
            "range": "± 34004.64124361287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902313.8622395834,
            "unit": "ns",
            "range": "± 6251.317597662889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363542.586216518,
            "unit": "ns",
            "range": "± 4810.7066950601575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2633759.6493489584,
            "unit": "ns",
            "range": "± 4469.795370962064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821114.0469447544,
            "unit": "ns",
            "range": "± 1719.1298736680387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742708.0258091518,
            "unit": "ns",
            "range": "± 430.82399301164037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8015030.4,
            "unit": "ns",
            "range": "± 146700.70524409311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21539092.2,
            "unit": "ns",
            "range": "± 251463.2734278081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54432149.8,
            "unit": "ns",
            "range": "± 437385.474040299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109243419.4,
            "unit": "ns",
            "range": "± 769475.0875832544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222971464.66666666,
            "unit": "ns",
            "range": "± 445766.9128841194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1452337,
            "unit": "ns",
            "range": "± 88707.53421930302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861069.3928571427,
            "unit": "ns",
            "range": "± 79105.97587968296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2364418.777777778,
            "unit": "ns",
            "range": "± 115852.96767597368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5726406.56,
            "unit": "ns",
            "range": "± 229135.02824630524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50230.74025974026,
            "unit": "ns",
            "range": "± 2589.6303963195282"
          }
        ]
      }
    ]
  }
}