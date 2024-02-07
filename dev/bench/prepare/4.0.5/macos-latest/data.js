window.BENCHMARK_DATA = {
  "lastUpdate": 1707290018400,
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
          "id": "1a91f6c432730d5ff7544165cd18c0253840f049",
          "message": "Prepare 4.0.5",
          "timestamp": "2024-02-07T15:51:40+09:00",
          "tree_id": "3d806d9db013e1f653f5897c9fb66ad9b584d62e",
          "url": "https://github.com/greymistcube/libplanet/commit/1a91f6c432730d5ff7544165cd18c0253840f049"
        },
        "date": 1707290002344,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8018306.542857143,
            "unit": "ns",
            "range": "± 367440.3362026881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19532729.657894738,
            "unit": "ns",
            "range": "± 982853.8492434238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48782152.75,
            "unit": "ns",
            "range": "± 2355442.5591966654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105995769.12222221,
            "unit": "ns",
            "range": "± 5864042.004441096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234014757.20967743,
            "unit": "ns",
            "range": "± 10599118.588730937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77173.08695652174,
            "unit": "ns",
            "range": "± 15884.028420758896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309609.3010752688,
            "unit": "ns",
            "range": "± 23761.20029530465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318929.95652173914,
            "unit": "ns",
            "range": "± 44682.00495059149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 307627.3010752688,
            "unit": "ns",
            "range": "± 28643.45226596676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347827.016949153,
            "unit": "ns",
            "range": "± 188782.02446029466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863291.533333333,
            "unit": "ns",
            "range": "± 66771.39396998717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20150.927083333332,
            "unit": "ns",
            "range": "± 4602.707304562099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107400.11956521739,
            "unit": "ns",
            "range": "± 14777.13951549055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112212.74418604652,
            "unit": "ns",
            "range": "± 11120.077541981067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115011.3956043956,
            "unit": "ns",
            "range": "± 17669.933174670292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8156.9315789473685,
            "unit": "ns",
            "range": "± 1124.0205443400685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22317.747252747253,
            "unit": "ns",
            "range": "± 4040.871172830067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1815280.7222222222,
            "unit": "ns",
            "range": "± 398917.98887166113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3398323.788888889,
            "unit": "ns",
            "range": "± 533395.8571106642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2878616.747126437,
            "unit": "ns",
            "range": "± 370998.76584597636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 33771044.097826086,
            "unit": "ns",
            "range": "± 7432611.419165443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3252052.1153846155,
            "unit": "ns",
            "range": "± 211034.09037987568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3540079.463917526,
            "unit": "ns",
            "range": "± 279728.6769506176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4528727.4,
            "unit": "ns",
            "range": "± 342294.4819590973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4797479.785714285,
            "unit": "ns",
            "range": "± 390683.44061411463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32690612.846938774,
            "unit": "ns",
            "range": "± 4070608.337990677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6140627.628645834,
            "unit": "ns",
            "range": "± 110497.96462924029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853794.2822916666,
            "unit": "ns",
            "range": "± 32071.01806736535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1245666.095703125,
            "unit": "ns",
            "range": "± 44589.95767259469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3018440.986447704,
            "unit": "ns",
            "range": "± 199347.90175310333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860598.4497379351,
            "unit": "ns",
            "range": "± 44597.580809770356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886151.7510279606,
            "unit": "ns",
            "range": "± 30344.36928865325"
          }
        ]
      }
    ]
  }
}