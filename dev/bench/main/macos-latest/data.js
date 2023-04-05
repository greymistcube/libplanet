window.BENCHMARK_DATA = {
  "lastUpdate": 1680684477707,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "839e4da7af33f2a177ead2dd7db2b0f05158ce4e",
          "message": "Merge pull request #3059 from greymistcube/refactor/block-validate\n\n♻️ Refactor block validate",
          "timestamp": "2023-04-05T15:32:20+09:00",
          "tree_id": "ed2fe2e334a015663806ebf70c79dcaa66638716",
          "url": "https://github.com/greymistcube/libplanet/commit/839e4da7af33f2a177ead2dd7db2b0f05158ce4e"
        },
        "date": 1680684443354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8608916.933333334,
            "unit": "ns",
            "range": "± 69921.3455804517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20565668.48,
            "unit": "ns",
            "range": "± 530364.9046970019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56829962.758064516,
            "unit": "ns",
            "range": "± 1647663.5235408344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109928695.64285715,
            "unit": "ns",
            "range": "± 1451926.3791688222"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208982344.79545453,
            "unit": "ns",
            "range": "± 7746911.761593998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63961.45744680851,
            "unit": "ns",
            "range": "± 9488.640898480682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 398456.4038461539,
            "unit": "ns",
            "range": "± 16182.116696974308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332578.4183673469,
            "unit": "ns",
            "range": "± 13213.16992126406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328557.77142857143,
            "unit": "ns",
            "range": "± 9437.164975232123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5637955.7,
            "unit": "ns",
            "range": "± 103278.0416138881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3930174.590909091,
            "unit": "ns",
            "range": "± 95478.46372258339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22472.603092783505,
            "unit": "ns",
            "range": "± 3561.339324036371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115331.375,
            "unit": "ns",
            "range": "± 13300.966762845315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116547.01030927835,
            "unit": "ns",
            "range": "± 7400.336486571132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258368.75263157894,
            "unit": "ns",
            "range": "± 22616.79352330749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6623.095744680851,
            "unit": "ns",
            "range": "± 1687.0593877605968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21995.26530612245,
            "unit": "ns",
            "range": "± 4258.995919012528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660438.097826087,
            "unit": "ns",
            "range": "± 220830.82110874323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218718.6056338027,
            "unit": "ns",
            "range": "± 157566.95119059514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713405.7422680412,
            "unit": "ns",
            "range": "± 292169.6055275257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6707827.95,
            "unit": "ns",
            "range": "± 236198.81292456103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393927.966666667,
            "unit": "ns",
            "range": "± 56754.47770109253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3537061.1333333333,
            "unit": "ns",
            "range": "± 179108.08688155227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4559582.038461538,
            "unit": "ns",
            "range": "± 122551.36872984513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4606187.52631579,
            "unit": "ns",
            "range": "± 234449.35251472253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8898744.42857143,
            "unit": "ns",
            "range": "± 242619.83142515883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6814589.048469388,
            "unit": "ns",
            "range": "± 270685.1358429788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918623.5579427083,
            "unit": "ns",
            "range": "± 34379.57303955988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298739.1173177084,
            "unit": "ns",
            "range": "± 19413.079349059983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2755107.092354911,
            "unit": "ns",
            "range": "± 77269.60814824556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861246.0674579327,
            "unit": "ns",
            "range": "± 8319.759175709367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737243.2081580529,
            "unit": "ns",
            "range": "± 2922.5117288520228"
          }
        ]
      }
    ]
  }
}